import React, { useState, useEffect } from "react";
import api from "../../../../utils/api";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../UI/AdminNavbar";
import ModalBarra from "../../../UI/ModalBarra";
import UserRegistro from "./UserRegistro";
// import Register from "../Auth/Register";
// import EditUser from "../Edit/EditUser";
// import ModalEdit from "../../Modal/ModalEdit";

const User = () => {
  const [users, setUsers] = useState([]);
  const [company, setCompany] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");

  // CHAMANDO A API DE LISTA DE USUÁRIOS
  useEffect(() => {
    api
      .get("/users/usuarios", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [token]);

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

  // REMOVENDO USUÁRIO
  async function removeUser(id) {
    let msgType = "success";

    const data = await api
      .delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedUsers = users.filter((user) => user._id !== id);
        setUsers(updatedUsers);
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
      <section className="h-[91vh]">
        <div className="bg-[#001c23]">
          <ModalBarra text="Convidar Usuário">
            <UserRegistro />
          </ModalBarra>
        </div>
        <nav className="h-[5rem]">
          <ul className="flex items-center list-none m-[50px] space-x-8">
            <li className="cursor-pointer font-medium py-2 text-[#68787b] hover:text-[#00abd6] transition ease-in-out duration-400 hover:border-b-2 hover:border-[#00abd6]">
              <Link className="max-w-[62px]" to="/register">
                Usuários
              </Link>
            </li>
            <li className="cursor-pointer font-medium py-2 text-[#68787b] hover:text-[#00abd6] transition ease-in-out duration-400 hover:border-b-2 hover:border-[#00abd6]">
              <Link to="/register">Convites</Link>
            </li>
          </ul>
        </nav>

        {company.map((company) => {
          if (
            users.findIndex((user) => user.empresa === company.empresa) > -1
          ) {
            return (
              <div className=" mx-[50px] mb-[70px]" key={company._id}>
                <div className="mb-[20px]">
                  <span className="text-2xl font-bold text-[#00abd6]">
                    {company.empresa}
                  </span>
                </div>

                {users.map((user) => {
                  if (company.empresa === user.empresa) {
                    return (
                      <div
                        className="mb-[15px] flex items-center justify-between border-b-2 border-[#737272] pb-2 text-md"
                        key={user._id}
                      >
                        <div className="flex justify-between w-[200rem] items-center">
                          <div className="w-[25rem]">
                            <span className="font-medium text-xl">
                              {user.name}
                            </span>
                          </div>
                          <div className="w-[25rem]">
                            <span>{user.cargo}</span>
                          </div>
                          <div className="w-[25rem]">
                            <span>hora</span>
                          </div>
                          <div className="flex">
                            <button
                              className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-2 px-4 rounded mr-3"
                              onClick={() => {
                                removeUser(user._id);
                              }}
                            >
                              Excluir
                            </button>
                            {/* <ModalEdit btnText="Editar">
                              <EditUser />
                            </ModalEdit> */}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            );
          }
        })}
        {users.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full space-y-2">
            <p>Ainda não há usuários cadastrados no sistema.</p>
            <p>Deseja convidar novos usuários?</p>
            <div>
              <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-3 m-[30px] px-8 rounded-md text-md">
                <Link to="/register">Convidar usuários</Link>
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default User;
