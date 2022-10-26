import api from "../../utils/api";
import React, { useState, useEffect } from "react";

function Select({ text, name, options, handleOnChange, value }) {
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
        <option>Selecione uma empresa</option>
        {company.map((company) => (
          <option value={company.empresa}>{company.empresa}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
