import api from "../../../../utils/api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SolucoesForm from "../../../form/SolucoesForm";
import AdminNavbar from "../../../UI/AdminNavbar";

const EditSolucao = () => {
  const [solucoes, setSolucoes] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/solucoes/${id}`)
      .then((response) => {
        setSolucoes(response.data.solucoes);
      });
  }, [token, id]);

  async function updateSolucoes(solucoes) {
    let msgType = "success";

    const formData = new FormData();

    await Object.keys(solucoes).forEach((key) => {
      if (key === "images") {
        for (let i = 0; i < solucoes[key].length; i++) {
          formData.append("images", solucoes[key][i]);
        }
      } else {
        formData.append(key, solucoes[key]);
      }
    });

    const data = await api
      .patch(`solucoes/${solucoes._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  }

  return (
    <>
      <AdminNavbar />
      <section>
        <div>
          <h1>Editando a Solução: {solucoes.titulo}</h1>
          <p>Depois da edição os dados serão atualizados no sistema</p>
        </div>
        {solucoes.titulo && (
          <SolucoesForm
            handleSubmit={updateSolucoes}
            btnText="Atualizar"
            solucoesData={solucoes}
          />
        )}
      </section>
    </>
  );
};

export default EditSolucao;
