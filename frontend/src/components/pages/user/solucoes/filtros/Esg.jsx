import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import todas from "../../../../../assets/todas.png";
import paradas from "../../../../../assets/Paradas.png";
import manu from "../../../../../assets/manu.svg";
import logistica from "../../../../../assets/logistica.svg";
import plan from "../../../../../assets/plan.png";
import esg from "../../../../../assets/esg.svg";
import sol from "../../../../../assets/sol1.svg";
import api from "../../../../../utils/api";
import UserNavbar from "../../../../UI/UserNavbar";

function Esg() {
  const filter = useLocation();
  const [solucoes, setSolucoes] = useState([]);
  const [indtechs, setIndtechs] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    console.log(token);
    api
      .get(`/solucoes/minhassolucoes${filter.search}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setSolucoes(response.data.solucoes);
      });
  }, [token]);

  useEffect(() => {
    api
      .get(`/indtechs/indtechs`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setIndtechs(response.data.indtechs);
      });
  }, [token]);

  return (
    <>
      <UserNavbar />
      <div>
        <div className="flex flex-col items-center mt-[30px] mb-[34px]">
          <p className="text-[42px] font-bold">Soluções</p>
          <span>
            <p>
              {solucoes.length} soluções fornecidas por {indtechs.length}{" "}
              startups
            </p>
          </span>
        </div>

        {/* filtros */}
        <div className="border-b-2 pb-[22px] w-[994px] flex items-center justify-center mx-auto mb-[70px]">
          <span className="flex flex-col items-center w-[65px] h-[91px] mr-[81px]">
            <img src={todas} alt="" />

            <span className="flex items-center justify-center text-label  hover:text-blue">
              <Link className="font-semibold " to="/solucoes">
                Todas as soluções
              </Link>
              {/* <p className="font-semibold text-label">Todas as soluções</p> */}
            </span>
          </span>

          <span className="flex flex-col items-center w-[65px] h-[91px] mr-[81px]">
            <img src={paradas} alt="" />
            <span className="flex items-center justify-center text-label hover:text-blue ">
              <Link
                className="font-semibold"
                to="/paradas?paradasDeManutencao=true"
              >
                Paradas de Manutenção
              </Link>
              {/* <p className="font-semibold text-label">Todas as soluções</p> */}
            </span>
          </span>

          <span className="flex flex-col items-center w-[95px] h-[91px] mr-[81px]">
            <img className="pointer" src={manu} alt="" />
            <span className="flex items-center justify-center text-label hover:text-blue">
              <Link
                className="font-semibold"
                to="/engenharia?EngenhariaEManutencao=true"
              >
                Engenharia e Manutenção
              </Link>
              {/* <p className="font-semibold text-label">Todas as soluções</p> */}
            </span>
          </span>

          <span className="flex flex-col items-center w-[95px] h-[91px] mr-[81px]">
            <img src={logistica} alt="" />
            <span className="flex items-center justify-center  text-label hover:text-blue">
              <Link
                className="font-semibold"
                to="/logistica?LogisticaEBackoffice=true"
              >
                Logística e Backoffice
              </Link>
              {/* <p className="font-semibold text-label">Todas as soluções</p> */}
            </span>
          </span>

          <span className="flex flex-col items-center w-[95px] h-[91px] mr-[81px]">
            <img src={plan} alt="" />
            <span className="flex items-center justify-center text-label hover:text-blue">
              <Link
                className="font-semibold"
                to="/planejamento?planejamentoEControle=true"
              >
                Planejamento e controle
              </Link>
              {/* <p className="font-semibold text-label">Todas as soluções</p> */}
            </span>
          </span>

          <span className="flex flex-col items-center w-[95px] h-[91px]">
            <img src={esg} alt="" />
            <span className="flex items-center justify-center text-label hover:text-blue">
              <Link className="font-semibold" to="/esg?Esg=true">
                ESG
              </Link>
              {/* <p className="font-semibold text-label">Todas as soluções</p> */}
            </span>
          </span>
        </div>

        {/* cartões */}
        <div className="flex flex-wrap justify-center">
          {solucoes.map((solucao) => (
            <section
              className="w-[600px] h-full flex rounded-lg m-5 shadow-xl bg-white"
              key={solucao._id}
            >
              <div className="min-w-[240px] flex rounded-lg justify-center items-center bg-bgBlue">
                <img src={sol} alt="" className="rounded-lg" />
              </div>
              <div className="flex flex-col mt-[12px] mx-[16px] text-body ">
                <span className="font-bold ">{solucao.titulo}</span>
                <span className="text-xs font-semibold text-placeholder">
                  por {solucao.indtech}
                </span>
                <span className="text-sm font-medium mt-[8px] text-body">
                  {solucao.descricaoCurta}
                </span>
                <div className="flex justify-end my-[15px]">
                  <button className="text-white bg-blue hover:bg-darkBlue duration-400 transition font-bold ease-in-out py-[6px] px-4 max-w-[95px] rounded-lg mt-[10px]  text-xs">
                    <Link to={`/solucoes/${solucao._id}`}>Saber mais</Link>
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* <div className="text-6xl flex justify-center mt-[40px]">
          FILTROS
          
        </div>

        <div className="flex justify-center">
          <div className="flex m-[80px] max-w-[2100px] flex-wrap justify-center ">
            {solucoes.map((solucao) => (
              <section className="w-[500px] h-[200px] flex flex-wrap border-solid border-[3px] border-[#00abd6] mx-[20px] mb-[40px]">
                <div className="">
                  <div className="">
                    <h1>{solucao.titulo}</h1>
                    <p>{solucao.descricao}</p>
                  </div>
                  <button>Saiba mais</button>
                </div>
              </section>
            ))}
          </div>
        </div> */}
    </>
  );
}

export default Esg;
