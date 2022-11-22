import React, { useState } from "react";
import Input from "../UI/Input";

function EmpresasForm({ handleSubmit, companyData, btnText }) {
  const [company, setCompany] = useState(companyData || {});

  function handleChange(e) {
    setCompany({ ...company, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    console.log(company);
    handleSubmit(company);
  }
  console.log(company);

  return (
    <section>
      <form onSubmit={submit}>
        <Input
          text="Identificação"
          type="text"
          name="empresa"
          placeholder="Adicionar Empresa"
          handleOnChange={handleChange}
          value={company.empresa || ""}
        />
        <input
          type="submit"
          value={btnText}
          className="text-white bg-blue hover:bg-darkBlue duration-400 transition ease-in-out py-3 my-[30px] px-8 rounded-md text-md"
        />
      </form>
    </section>
  );
}

export default EmpresasForm;
