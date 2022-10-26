import React, { useState, useEffect } from "react";
import api from "../../../../utils/api";
import { useParams } from "react-router-dom";
import EmpresasForm from "../../../form/EmpresasForm";
import AdminNavbar from "../../../UI/AdminNavbar";

function EditEmpresa() {
  const [company, setCompany] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/empresas/${id}`, {
        Authorization: `Bearer ${JSON.parse(token)}`,
      })
      .then((response) => {
        setCompany(response.data.company);
      });
  }, [token, id]);

  async function updateCompany(company) {
    let msgType = "success";

    // const formData = new FormData()

    // await Object.keys(solucoes).forEach((key) => {
    // if (key === 'images') {
    //     for (let i = 0; i < solucoes[key].length; i++) {
    //     formData.append('images', solucoes[key][i])
    //     }
    // } else {
    //     formData.append(key, solucoes[key])
    // }
    // })

    const data = await api
      .patch(`empresas/${company._id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
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
      <Message />
      <section>
        <div>
          <h1>Editando a Empresa: {company.empresa}</h1>
          <p>Depois da edição os dados serão atualizados no sistema</p>
        </div>
        {company.empresa && (
          <EmpresasForm
            handleSubmit={updateCompany}
            btnText="Atualizar"
            companyData={company}
          />
        )}
      </section>
    </>
  );
}

export default EditEmpresa;
