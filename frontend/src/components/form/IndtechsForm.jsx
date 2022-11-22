import React, { useState } from "react";
import Input from "../UI/Input";
import InputText from "../UI/InputText";
import InputCheckbox from "../UI/InputCheckbox";

function IndtechsForm({ handleSubmit, indtechData, btnText }) {
  const [indtech, setIndtech] = useState(indtechData || {});

  function handleChange(e) {
    setIndtech({ ...indtech, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    console.log(indtech);
    handleSubmit(indtech);
  }
  console.log(indtech);

  return (
    <section>
      <form onSubmit={submit}>
        <Input
          text="Título"
          type="text"
          name="titulo"
          placeholder="Adicionar Indtech"
          handleOnChange={handleChange}
          value={indtech.titulo || ""}
        />
        <InputText
          text="Descrição"
          type="text"
          name="descricao"
          placeholder="Adicionar descrição"
          handleOnChange={handleChange}
          value={indtech.descricao || ""}
        />
        <Input
          text="Imagem"
          type="file"
          name="images"
          handleOnChange={handleChange}
          value={indtech.images || ""}
        />
        <input
          type="submit"
          value={btnText}
          className="text-white bg-blue hover:bg-darkBlue duration-400 transition ease-in-out py-3 px-8 rounded-md my-[20px] text-md"
        />
      </form>
    </section>
  );
}

export default IndtechsForm;
