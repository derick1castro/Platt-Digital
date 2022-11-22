import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import imagem from "../../../../assets/imagem.svg";
import Brumetal from "../../../../assets/Brumetal.svg";
import C from "../../../../assets/C.svg";
import Carapreta from "../../../../assets/Carapreta.svg";
import Cargil from "../../../../assets/Cargill.svg";
import Cebraze from "../../../../assets/Cebraze.svg";
import Cmpc from "../../../../assets/CMPC.svg";
import Columbia from "../../../../assets/Columbia.svg";
import api from "../../../../utils/api";
import UserNavbar from "../../../UI/UserNavbar";
import ModalContato from "../../../UI/ModalContato";
import UserRegistro from "../../admin/usuarios/UserRegistro";
import Interesse from "./Interesse";
import ContatoForm from "../../../form/ContatoForm";
import Contato from "./Contato";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLink } from "@fortawesome/free-solid-svg-icons";

function SolucoesDetalhes() {
  const [solucoes, setSolucoes] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const { id } = useParams();
  const solucao = [
    solucoes.caracteristicas1,
    solucoes.caracteristicas2,
    solucoes.caracteristicas3,
    solucoes.caracteristicas4,
    solucoes.caracteristicas5,
  ].sort();
  const dores = [
    solucoes.dores1,
    solucoes.dores2,
    solucoes.dores3,
    solucoes.dores4,
    solucoes.dores5,
  ].sort();

  useEffect(() => {
    api
      .get(`/solucoes/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setSolucoes(response.data.solucoes);
      });
  }, [token, id]);

  return (
    <>
      <UserNavbar />
      <div className="h-[100%] bg-[#F5F5F5]">
        <section className="bg-[#E9FBFF]">
          <div className="flex flex-col items-center pt-[70px] space-y-3">
            <h1 className="font-bold text-[42px]">{solucoes.titulo}</h1>
            <p className="text-[#007794]">
              Uma solução de{" "}
              <span className="font-bold">{solucoes.indtech}</span>
            </p>
          </div>
          <div className="flex items-center justify-between py-[40px] mx-[140px]">
            <div className="max-w-[600px]">
              <p className="text-lg">{solucoes.descricao}</p>
            </div>
            <div className="mr-[120px]">
              <img className="w-[450px]" src={imagem} alt="" />
            </div>
          </div>
        </section>

        <section className="mt-[97px] flex ml-[140px] space-x-44">
          <div>
            <h2 className="mb-[12px] font-bold text-3xl text-[#111827]">
              Características
            </h2>
            <ul className="text-lg text-[#353A3C]">
              {solucao.map(
                (solucao) => solucao !== undefined && <li>• {solucao}</li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="mb-[12px] font-bold text-3xl text-[#111827]">
              Dores atendidas
            </h2>
            <ul className="text-lg text-[#353A3C]">
              {dores.map((dores) => dores !== undefined && <li>• {dores}</li>)}
            </ul>
          </div>
        </section>

        <section className="mt-[120px] ml-[140px] ">
          <h2 className="font-bold text-3xl text-[#111827]">Clientes</h2>
          <div className="flex space-x-20 mt-[41px]">
            <div>
              <img src={Brumetal} alt="" />
            </div>
            <div>
              <img src={C} alt="" />
            </div>
            <div>
              <img src={Carapreta} alt="" />
            </div>
            <div>
              <img src={Cargil} alt="" />
            </div>
            <div>
              <img src={Cebraze} alt="" />
            </div>
            <div>
              <img src={Cmpc} alt="" />
            </div>
            <div>
              <img src={Columbia} alt="" />
            </div>
          </div>
        </section>

        <section className="my-[100px] ml-[140px] space-y-5">
          {solucoes.case1 && (
            <h2 className="font-bold text-3xl text-[#111827]">Cases</h2>
          )}
          <ul className="text-lg text-[#353A3C]">
            {solucoes.case1 && (
              <li>
                <FontAwesomeIcon icon={faLink} />{" "}
                <a
                  className="underline"
                  href={solucoes.linkCase1}
                  target="_blank"
                >
                  {solucoes.case1}
                </a>
              </li>
            )}

            {solucoes.case2 && (
              <li>
                <FontAwesomeIcon icon={faLink} />{" "}
                <a
                  className="underline"
                  href={solucoes.linkCase2}
                  target="_blank"
                >
                  {solucoes.case2}
                </a>
              </li>
            )}
            {solucoes.case3 && (
              <li>
                <FontAwesomeIcon icon={faLink} />{" "}
                <a
                  className="underline"
                  target="_blank"
                  href={solucoes.linkCase3}
                >
                  {solucoes.case3}
                </a>
              </li>
            )}
            {solucoes.case4 && (
              <li>
                <FontAwesomeIcon icon={faLink} />{" "}
                <a
                  className="underline"
                  target="_blank"
                  href={solucoes.linkCase4}
                >
                  {solucoes.case4}
                </a>
              </li>
            )}
            {solucoes.case5 && (
              <li>
                <FontAwesomeIcon icon={faLink} />{" "}
                <a
                  className="underline"
                  target="_blank"
                  href={solucoes.linkCase5}
                >
                  {solucoes.case5}
                </a>
              </li>
            )}
          </ul>
        </section>

        <footer className="flex flex-col justify-center items-center h-[291px] bg-[#485659] space-y-6">
          <div className=" text-3xl text-white flex flex-col">
            <span>Vamos acelerar a transformação</span>
            <span className="mx-[52px]">digital da sua indústria? </span>
          </div>
          <div className="font-bold">
            <ModalContato text="Solicitar demonstração">
              <Contato />
            </ModalContato>
          </div>
        </footer>
      </div>
    </>
  );
}

export default SolucoesDetalhes;
