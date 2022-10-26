import React, { useState } from "react";
import api from "../../../../utils/api";
import { useNavigate } from "react-router-dom";
import EmpresasForm from "../../../form/EmpresasForm";

function AddEmpresa() {
  const [token] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  async function registerCompany(company) {
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
        "/empresas/create",
        { empresa: company.empresa },
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
      navigate("/empresas");
    }
  }

  return (
    <section>
      <div className="space-y-9 mt-[50px]">
        <h1 className="text-3xl text-blue font-bold">Nova Empresa</h1>
        <h2 className="text-blue font-bold">Dados da empresa</h2>
      </div>
      <EmpresasForm
        handleSubmit={registerCompany}
        btnText="Cadastrar Nova Empresa"
      />
    </section>
  );
}

export default AddEmpresa;
