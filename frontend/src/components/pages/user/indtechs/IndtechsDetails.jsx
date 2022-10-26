import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../../../utils/api";
import UserNavbar from "../../../UI/UserNavbar";

function IndtechDetails() {
  const [indtechs, setIndtechs] = useState({});
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

  return (
    <>
      {/* nav bar */}
      <UserNavbar />

      <div className="h-[100%] bg-[#F5F5F5]">
        <section className="bg-[#E9FBFF]">
          <div className="flex flex-col items-center pt-[70px] space-y-3">
            <h1 className="font-bold text-[42px]">{indtechs.titulo}</h1>
            <span>{indtechs.images}</span>
          </div>
          <div className="flex items-center justify-between py-[40px] mx-[140px]">
            <div className="max-w-[600px]">
              <p className="text-lg">{indtechs.descricao}</p>
            </div>
            <div className="mr-[120px]">
              <img className="w-[450px]"alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default IndtechDetails;
