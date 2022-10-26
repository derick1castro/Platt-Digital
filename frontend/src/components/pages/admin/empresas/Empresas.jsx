import React, { useState, useEffect } from "react";
import AdminNavbar from "../../../UI/AdminNavbar";
import ModalBarra from "../../../UI/ModalBarra";
import { Link } from "react-router-dom";
import AddEmpresa from "./AddEmpresa";
import api from "../../../../utils/api";

function Empresas() {
  const [company, setCompany] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api
      .get("/empresas/allcompanies", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setCompany(response.data.company);
      });
  }, [token]);

  async function removeCompany(id) {
    let msgType = "success";

    const data = await api
      .delete(`/empresas/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedCompany = company.filter((company) => company._id !== id);
        setCompany(updatedCompany);
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
        {company.length > 0 ? (
          <>
            <div className="bg-[#001c23]">
              <ModalBarra text="Cadastrar Empresa">
                <AddEmpresa />
              </ModalBarra>
            </div>

            <div className="flex m-[50px] items-center justify-between mt-[70px]">
              <div className="text-blue text-2xl font-medium flex items-center">
                <div className="w-[15rem]">
                  <span>Empresas</span>
                </div>
                <div>
                  <span>Usuários</span>
                </div>
              </div>
              <span></span>
            </div>
          </>
        ) : null}

        {company.length > 0 ? (
          company.map((company) => (
            <div
              className="flex items-center justify-between mx-[50px] mt-[20px] border-b-2 border-[#737272] pb-3 text-md"
              key={company._id}
            >
              <div>
                <div className="w-[15rem]">
                  <span className="font-medium text-xl">
                    {" "}
                    {company.empresa}
                  </span>
                  {/* <span className=""> {company.indtech}</span> */}
                </div>
              </div>
              <div>
                <button
                  className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-2 px-4 rounded mr-3"
                  onClick={() => {
                    removeCompany(company._id);
                  }}
                >
                  Excluir
                </button>
                <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-2 px-4 rounded mr-3">
                  <Link to={`/solucoes/edit/${company._id}`}>Editar</Link>
                </button>
                <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-2 px-4 rounded">
                  <Link to={`/solucoes/edit/${company._id}`}>
                    Convidar usuário
                  </Link>
                </button>
              </div>
            </div>
          ))
        ) : (
          <section className="h-[91vh]">
            <div className="flex flex-col items-center justify-center h-full space-y-2">
              <p>Ainda não há empresas cadastrados no sistema.</p>
              <p>Deseja cadastrar novas empresas?</p>
              <ModalBarra text="Cadastrar Empresa">
                <AddEmpresa />
              </ModalBarra>
            </div>
          </section>
        )}
      </section>
    </>
  );
}

export default Empresas;
