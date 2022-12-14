import React, { useState, useEffect } from "react";
import api from "../../../../utils/api";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../UI/AdminNavbar";
// import useFlashMessage from "../../../hooks/useFlashMessage";
import ModalIndtech from "../../../UI/ModalIndtech";
import AddIntech from "./AddIndtech";
// import AddSolucao from "./AddSolucao";

const AdminIndtechs = () => {
  const [indtechs, setIndtechs] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  // const { setFlashMessage } = useFlashMessage;

  useEffect(() => {
    api
      .get("/indtechs/indtechs", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setIndtechs(response.data.indtechs);
      });
  }, [token]);

  async function removeSolucao(id) {
    let msgType = "success";

    const data = await api
      .delete(`/indtechs/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedIndtechs = indtechs.filter(
          (indtech) => indtech._id !== id
        );
        setIndtechs(updatedIndtechs);
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
        {indtechs.length > 0 ? (
          <>
            <div className="bg-[#001c23] flex justify-end">
              <ModalIndtech text="Adicionar Indtech">
                <AddIntech />
              </ModalIndtech>
            </div>
            <div className="flex m-[50px] items-center justify-between mt-[70px]">
              <div className="text-blue text-2xl font-medium flex items-center">
                <div className="w-[15rem]">
                  <span>Título</span>
                </div>
              </div>
              <span></span>
            </div>
          </>
        ) : null}

        {indtechs.length > 0 ? (
          indtechs.map((indtech) => (
            <div
              className="flex items-center justify-between mx-[50px] mt-[20px] border-b-2 border-[#737272] pb-3 text-md"
              key={indtech._id}
            >
              <div className="flex items-center">
                <div className="w-[15rem]">
                  <span className="font-medium text-xl"> {indtech.titulo}</span>
                </div>
              </div>
              <div>
                <button
                  className="text-white bg-blue hover:bg-darkBlue duration-400 transition ease-in-out py-2 px-4 rounded mr-3"
                  onClick={() => {
                    removeSolucao(indtech._id);
                  }}
                >
                  Excluir
                </button>
                <button className="text-white bg-blue hover:bg-darkBlue duration-400 transition ease-in-out py-2 px-4 rounded mr-6">
                  <Link to={`/indtechs/edit/${indtech._id}`}>Editar</Link>
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
                <ModalIndtech text="Adicionar Indtech">
                  <AddIntech />
                </ModalIndtech>
              </div>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default AdminIndtechs;
