import React, { useState, useContext } from "react";
import Input from "../UI/Input";
import { Link } from "react-router-dom";
import { Context } from "../../context/AdminContext";

function RegisterAdminForm() {
  const [admin, setAdmin] = useState({});
  const { registerAdmin } = useContext(Context);

  function handleChange(e) {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    registerAdmin(admin);
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-[100%]">
      <Input
        text="Nome completo"
        type="nome"
        name="name"
        placeholder="Digite o seu nome"
        handleOnChange={handleChange}
      />
      <Input
        text="E-mail"
        type="email"
        name="email"
        placeholder="Digite o seu e-mail"
        handleOnChange={handleChange}
      />
      <Input
        text="Senha"
        type="password"
        name="password"
        placeholder="Digite a sua senha"
        handleOnChange={handleChange}
      />
      <div className="flex justify-between text-sm">
        <div className="pb-5 flex items-center">
          <input type="radio" id="radio" />
          <label className="pl-1" htmlFor="radio">
            Lembrar acesso
          </label>
        </div>
        <Link
          className="hover:text-blue transition ease-out duration-400"
          to="/admin/register"
        >
          Esqueceu a senha ?
        </Link>
      </div>
      <input
        className="rounded-lg font-bold text-white py-3 w-[100%] bg-blue hover:bg-darkBlue transition ease-out duration-400 cursor-pointer"
        type="submit"
        value="Log in"
      />
      <div className="flex items-center justify-center pt-3 text-sm hover:text-blue">
        <Link to="/admin/login">Já possuo cadastro!</Link>
      </div>
    </form>
  );
}

export default RegisterAdminForm;
