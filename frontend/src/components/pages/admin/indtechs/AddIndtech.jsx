import React, { useState } from "react";
import api from "../../../../utils/api";
import { useNavigate } from "react-router-dom";
import EmpresasForm from "../../../form/EmpresasForm";
import IndtechsForm from "../../../form/IndtechsForm";

function AddIntech() {
  const [token] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  async function registerIndtech(indtech) {
    let msgType = "success";

    // const formData = new FormData()

    // await Object.keys(company).forEach((key) => {
    //   if(key === 'images') {
    //     for(let i = 0; i < company[key].length; i++) {
    //       formData.append('images', company[key][i])
    //     }
    //   } else {
    //     formData.append(key, company[key])
    //   }
    // })

    const data = await api
      .post(
        "/indtechs/create",
        { titulo: indtech.titulo },
        { descricao: indtech.descricao},
        {
          Authorization: `Bearer ${JSON.parse(token)}`,
          // 'Content-Type': 'multipart/form-data'
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);

    if (msgType !== "error") {
      navigate("/admin/indtechs");
    }
  }

  return (
    <section className="mx-[30px]">
      <div className="space-y-9 mt-[50px]">
        <h1 className="text-3xl text-blue font-bold">Nova Indtech</h1>
        <h2 className="text-blue font-bold">Dados da indtech</h2>
      </div>
      <IndtechsForm
        handleSubmit={registerIndtech}
        btnText="Cadastrar Nova Indtech"
      />
    </section>
  );
}

export default AddIntech;
