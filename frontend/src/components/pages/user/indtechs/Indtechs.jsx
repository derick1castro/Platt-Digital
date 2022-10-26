import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../../utils/api";
import UserNavbar from "../../../UI/UserNavbar";
import ambisis from "../../../../assets/ambisis.png";

function Indtechs() {
  const [indtechs, setIndtechs] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    console.log(token);
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

  return (
    <>
      <UserNavbar />
      <div>
        <div className="flex flex-col items-center mt-[30px] mb-[34px]">
          <p className="text-[42px] font-bold">Indtechs</p>
          <span>
            <p>{indtechs.length} indtechs cadastradas</p>
          </span>
        </div>

        {/* cartões */}
        <div className="flex flex-wrap justify-center">
          {indtechs.map((indtech) => (
            <section
              className="w-[994px] h-[180px] flex rounded-lg m-5 shadow-xl bg-white"
              key={indtech._id}
            >
              <div className="min-w-[398px] flex rounded-lg justify-center items-center bg-bgBlue">
                <img src={ambisis} className="rounded-lg" />
              </div>
              <div className="flex flex-col mt-[13px] ml-[25px] mb text-body w-full">
                <span className="font-bold ">{indtech.titulo}</span>
                <span className="text-sm font-medium mt-[8px] w-[503px] text-body mb-[18px]">
                  {indtech.descricao}
                </span>
                <div className="flex justify-end mr-[17px]">
                  <button className="text-white bg-blue hover:bg-darkBlue duration-400 transition font-bold ease-in-out py-[6px] px-4 rounded-lg mt-[10px] w-[200px] text-xs">
                    <Link to={`/indtechs/${indtech._id}`}>
                      Conhecer soluções da indtech
                    </Link>
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default Indtechs;
