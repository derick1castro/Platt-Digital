import React, { useState, useEffect } from "react";
import api from "../../../../utils/api";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../UI/AdminNavbar";
// import useFlashMessage from "../../../hooks/useFlashMessage";
// import ModalBarra from "../../layout/ModalBarra";
// import AddSolucao from "./AddSolucao";

const Solucoes = () => {
  const [solucoes, setSolucoes] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  // const { setFlashMessage } = useFlashMessage;

  useEffect(() => {
    api
      .get("/solucoes/minhassolucoes", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setSolucoes(response.data.solucoes);
      });
  }, [token]);

  async function removeSolucao(id) {
    let msgType = "success";

    const data = await api
      .delete(`/solucoes/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedSolucoes = solucoes.filter(
          (solucao) => solucao._id !== id
        );
        setSolucoes(updatedSolucoes);
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
        {solucoes.length > 0 ? (
          <>
            <div className="bg-[#001c23] flex justify-end">
              <button className="text-white bg-blue hover:bg-darkBlue duration-400 transition ease-in-out py-3 m-[20px] px-8 rounded-md text-md">
                <Link to="/admin/solucoes/add">Adicionar Solução</Link>
              </button>
              {/* <ModalBarra text="Nova solução">
                <AddSolucao />{" "}
              </ModalBarra> */}
            </div>
            <div className="flex m-[50px] items-center justify-between mt-[70px]">
              <div className="text-blue text-2xl font-medium flex items-center">
                <div className="w-[15rem]">
                  <span>Título</span>
                </div>
                <div>
                  <span>Indtech</span>
                </div>
              </div>
              <span></span>
            </div>
          </>
        ) : null}

        {solucoes.length > 0 ? (
          solucoes.map((solucao) => (
            <div
              className="flex items-center justify-between mx-[50px] mt-[20px] border-b-2 border-[#737272] pb-3 text-md"
              key={solucao._id}
            >
              <div className="flex items-center">
                <div className="w-[15rem]">
                  <span className="font-medium text-xl"> {solucao.titulo}</span>
                </div>
                <div>
                  <span className="font-medium text-xl">
                    {" "}
                    {solucao.indtech}
                  </span>
                </div>
              </div>
              <div>
                <button
                  className="text-white bg-blue hover:bg-darkBlue duration-400 transition ease-in-out py-2 px-4 rounded mr-3"
                  onClick={() => {
                    removeSolucao(solucao._id);
                  }}
                >
                  Excluir
                </button>
                <button className="text-white bg-blue hover:bg-darkBlue duration-400 transition ease-in-out py-2 px-4 rounded mr-6">
                  <Link to={`/solucoes/edit/${solucao._id}`}>Editar</Link>
                </button>
              </div>
            </div>
          ))
        ) : (
          <section className="h-[91vh]">
            <div className="flex flex-col items-center justify-center h-full space-y-2">
              <p>Ainda não há soluções cadastrados no sistema.</p>
              <p>Deseja cadastrar novas soluções?</p>
              <div>
                <button className="text-white bg-blue hover:bg-darkBlue duration-400 transition ease-in-out py-3 m-[30px] px-8 rounded-md text-md">
                  <Link to="/solucoes/add">Nova solução</Link>
                </button>
              </div>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default Solucoes;
