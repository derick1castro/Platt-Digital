import React, { useState } from "react";
import api from "../../../../utils/api";
import { useNavigate } from "react-router-dom";
import EmpresasForm from "../../../form/EmpresasForm";
import IndtechsForm from "../../../form/IndtechsForm";
import ContatoForm from "../../../form/ContatoForm";

function Contato() {
  return (
    <section className="mx-[30px]">
      <div className="space-y-9 mt-[50px]">
        <h1 className="text-3xl text-blue font-bold">Entre em contato</h1>
        <h2 className="text-blue font-bold">Preencha o formulário</h2>
      </div>
      <ContatoForm btnText="Enviar" />
    </section>
  );
}

export default Contato;
