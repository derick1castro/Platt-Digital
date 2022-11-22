import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../../../utils/api";
import UserNavbar from "../../../UI/UserNavbar";
import sol from "../../../../assets/sol1.svg";

function IndtechDetails() {
  const [indtechs, setIndtechs] = useState({});
  const [solucoes, setSolucoes] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/indtechs/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setIndtechs(response.data.indtechs);
      });
  }, [token, id]);

  useEffect(() => {
    api
      .get(`/solucoes/minhassolucoes?indtech=${indtechs.titulo}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setSolucoes(response.data.solucoes);
      });
  }, [indtechs]);

  return (
    <>
      <UserNavbar />
      <div className="h-[100%]">
        <section className="bg-[#E9FBFF] ">
          <div className="flex flex-col items-center pt-[70px]">
            <h1 className="font-bold text-[42px]">{indtechs.titulo}</h1>
            <img src={indtechs.image1} alt="" className="rounded-lg" />
          </div>
          <div className="flex items-center justify-between mx-[140px]">
            <div className="max-w-[600px]">
              <p className="text-lg">{indtechs.descricao}</p>
            </div>
            <div className="mr-[120px]">
              <img src={sol} alt="" className="rounded-lg w-[400px]" />
            </div>
          </div>
        </section>

        <section className="mx-[140px]">
          {solucoes.length > 0 ? (
            <>
              <p className="text-3xl font-bold my-[45px]">Soluções</p>
              <div className="flex space-x-12">
                {solucoes.map((solucao) => (
                  <section
                    className="max-w-[500px] h-full flex rounded-lg my-5 shadow-xl bg-white"
                    key={solucao._id}
                  >
                    <div className="w-[240px] flex rounded-lg justify-center items-center bg-bgBlue">
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
                          <Link to={`/solucoes/${solucao._id}`}>
                            Saber mais
                          </Link>
                        </button>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="text-xl my-[45px]">Está indtech ainda não possui soluções cadastradas.</p>
            </>
          )}
        </section>
      </div>
    </>
  );
}

export default IndtechDetails;
