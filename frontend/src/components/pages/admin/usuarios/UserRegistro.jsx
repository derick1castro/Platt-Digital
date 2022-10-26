import React, { useState, useContext } from "react";
import Input from "../../../UI/Input";
import Select from "../../../UI/Select";
import { Context } from "../../../../context/AdminContext";

const UserRegistro = () => {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    register(user);
  }

  return (
    <>
      
      <section className="max-w-[350px] mx-auto">
        <h1 className="text-[#009CC2] text-3xl font-bold my-10">
          Convidar Usuário
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            text="Nome Completo"
            type="text"
            name="name"
            placeholder="Ex: Derick Castro Domingos"
            handleOnChange={handleChange}
          />
          <Input
            text="E-mail"
            type="text"
            name="email"
            placeholder="Ex: derick.domingos@timenow.com.br"
            handleOnChange={handleChange}
          />
          <Input
            text="Cargo"
            type="text"
            name="cargo"
            placeholder="Desenvolvedor"
            handleOnChange={handleChange}
          />
          <Input
            text="Senha"
            type="password"
            name="password"
            placeholder="Digite a senha"
            handleOnChange={handleChange}
          />
          <Select text="Empresa" name="empresa" handleOnChange={handleChange} />
          <button
            className="bg-[#009CC2] p-3 text-white px-5 rounded mt-4"
            type="submit"
          >
            Cadastrar usuário
          </button>
        </form>
      </section>
    </>
  );
};

export default UserRegistro;
