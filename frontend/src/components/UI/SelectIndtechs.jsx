import api from "../../utils/api";
import React, { useState, useEffect } from "react";

function SelectIndtechs({ text, name, options, handleOnChange, value }) {
  const [indtech, setIndtech] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api
      .get("/indtechs/indtechs", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setIndtech(response.data.indtechs);
      });
  }, [token]);

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-bold text-sm text-[#68787b]" htmlFor={name}>
        {text}:
      </label>
      <select
        className="p-3 border rounded"
        name={name}
        id={name}
        onChange={handleOnChange}
      >
        <option>Selecione uma indtech</option>
        {indtech.map((indtechs) => (
          <option value={indtechs.titulo}>{indtechs.titulo}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectIndtechs;
