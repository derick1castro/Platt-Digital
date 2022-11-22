import React, { useState } from "react";
import Input from "../UI/Input";
import InputCheckbox from "../UI/InputCheckbox";
import InputSimples from "../UI/InputSimples";
import InputText from "../UI/InputText";
import InputTextArea from "../UI/InputTextArea";
import SelectIndtechs from "../UI/SelectIndtechs";

const SolucoesForm = ({ handleSubmit, solucoesData, btnText }) => {
  const [solucoes, setSolucoes] = useState(solucoesData || {});
  const [preview, setPreview] = useState([]);

  function onFileChange(e) {
    setPreview(Array.from(e.target.files));
    setSolucoes({ ...solucoes, images: [...e.target.files] });
  }

  // function handleChange(e) {
  //   setSolucoes({ ...solucoes, [e.target.name]: e.target.value });
  // }
  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setSolucoes({
      ...solucoes,
      [e.target.name]: value,
    });
  }

  function submit(e) {
    e.preventDefault();
    console.log(solucoes);
    handleSubmit(solucoes);
  }

  return (
    <>
      <section className="max-w-[80%] mx-auto  space-y-8 mb-4">
        <h1 className="text-3xl font-bold text-[#009cc2]">Nova Solução</h1>
        <form className="space-y-4" onSubmit={submit}>
          <p className="text-xl font-bold text-[#009cc2]">Resumo</p>
          <div>
            <div className="flex justify-start my-4 ml-8">
              {preview.length > 0
                ? preview.map((image1, index) => (
                    <img
                      className="w-[200px] h-[150px]"
                      src={URL.createObjectURL(image1)}
                      alt={solucoes.titulo}
                      key={`${solucoes.titulo} + ${index}`}
                    />
                  ))
                : solucoes.images1 &&
                  solucoes.images1.map((image1, index) => (
                    <img
                      src={`${process.env.REACT_APP_API}/images1/solucoes/${image1}`}
                      alt={solucoes.titulo}
                      key={`${solucoes.titulo} + ${index}`}
                    />
                  ))}
            </div>
          </div>
          <Input
            text="Imagem da solução"
            type="file"
            name="images1"
            handleOnChange={onFileChange}
            multiple
          />
          <Input
            text="Título da Solução"
            type="text"
            name="titulo"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.titulo || ""}
          />
          <InputTextArea
            text="Descrição curta com até 55 caracteres"
            type="text"
            name="descricaoCurta"
            placeholder="Add text"
            maxLength={55}
            handleOnChange={handleChange}
            value={solucoes.descricaoCurta || ""}
          />
          <InputTextArea
            text="Descrição Longa"
            type="text"
            name="descricao"
            placeholder="Add text"
            maxLength={800}
            handleOnChange={handleChange}
            value={solucoes.descricao || ""}
          />
          {/* <InputText
            text="Descrição Longa"
            type="text"
            name="descricao"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.descricao || ""}
          /> */}
          {/* <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          /> */}
          <SelectIndtechs
            text="Indtech"
            name="indtech"
            handleOnChange={handleChange}
          />
          {/* <Input
            text="Indtech que realiza"
            type="text"
            name="indtech"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.indtech || ""}
          /> */}
          <Input
            text="Características"
            type="text"
            name="caracteristicas1"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas1 || ""}
          />
          <InputSimples
            type="text"
            name="caracteristicas2"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas2 || ""}
          />
          <InputSimples
            type="text"
            name="caracteristicas3"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas3 || ""}
          />
          <InputSimples
            type="text"
            name="caracteristicas4"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas4 || ""}
          />
          <InputSimples
            type="text"
            name="caracteristicas5"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas5 || ""}
          />
          <Input
            text="Dores que atende"
            type="text"
            name="dores1"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.dores1 || ""}
          />
          <InputSimples
            type="text"
            name="dores2"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.dores2 || ""}
          />
          <InputSimples
            type="text"
            name="dores3"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.dores3 || ""}
          />
          <InputSimples
            type="text"
            name="dores4"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.dores4 || ""}
          />
          <InputSimples
            type="text"
            name="dores5"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.dores5 || ""}
          />

          <p className="text-xl font-bold">Case</p>

          <InputSimples
            text="Case 1:"
            type="text"
            name="case1"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.case1 || ""}
          />
          <InputSimples
            text="Link para case 1 (opcional):"
            type="text"
            name="linkCase1"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.linkCase1 || ""}
          />
          <InputSimples
            text="Case 2:"
            type="text"
            name="case2"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.case2 || ""}
          />
          <InputSimples
            text="Link para case 2 (opcional):"
            type="text"
            name="linkCase2"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.linkCase2 || ""}
          />
          <InputSimples
            text="Case 3:"
            type="text"
            name="case3"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.case3 || ""}
          />
          <InputSimples
            text="Link para case 3 (opcional):"
            type="text"
            name="linkCase3"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.linkCase3 || ""}
          />
          <InputSimples
            text="Case 4:"
            type="text"
            name="case4"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.case4 || ""}
          />
          <InputSimples
            text="Link para case 4 (opcional):"
            type="text"
            name="linkCase4"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.linkCase4 || ""}
          />
          <InputSimples
            text="Case 5:"
            type="text"
            name="case4"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.case4 || ""}
          />
          <InputSimples
            text="Link para case 5 (opcional):"
            type="text"
            name="linkCase5"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.linkCase5 || ""}
          />

          <div>
            <p className="flex text-xl font-bold">Clientes</p>
            <div className="flex justify-start my-4 space-x-4 ml-8">
              {preview.length > 0
                ? preview.map((image, index) => (
                    <img
                      src={URL.createObjectURL(image)}
                      alt={solucoes.titulo}
                      key={`${solucoes.titulo} + ${index}`}
                    />
                  ))
                : solucoes.images &&
                  solucoes.images.map((image, index) => (
                    <img
                      src={`${process.env.REACT_APP_API}/images/solucoes/${image}`}
                      alt={solucoes.titulo}
                      key={`${solucoes.titulo} + ${index}`}
                    />
                  ))}
            </div>
          </div>

          <Input
            text="Imagens dos clientes"
            type="file"
            name="images2"
            handleOnChange={onFileChange}
            multiple
          />
          <div className="flex flex-col">
            <p className="text-xl font-bold">Categorização</p>
            <InputCheckbox
              text="Paradas de manutenção"
              type="checkbox"
              name="paradasDeManutencao"
              handleOnChange={handleChange}
              value={solucoes.paradasDeManutencao || false}
            />
            <InputCheckbox
              text="Engenharia e Manutenção"
              type="checkbox"
              name="EngenhariaEManutencao"
              handleOnChange={handleChange}
              value={solucoes.EngenhariaEManutencao || false}
            />
            <InputCheckbox
              text="Logística e Backoffice"
              type="checkbox"
              name="LogisticaEBackoffice"
              handleOnChange={handleChange}
              value={solucoes.LogisticaEBackoffice || false}
            />
            <InputCheckbox
              text="Planejamento e Controle"
              type="checkbox"
              name="planejamentoEControle"
              handleOnChange={handleChange}
              value={solucoes.planejamentoEControle || false}
            />
            <InputCheckbox
              text="ESG"
              type="checkbox"
              name="Esg"
              handleOnChange={handleChange}
              value={solucoes.Esg || false}
            />
          </div>

          <input
            className="text-white bg-blue hover:bg-darkBlue duration-400 transition ease-in-out py-2 px-4 rounded mr-3"
            type="submit"
            value={btnText}
          />
        </form>
      </section>
    </>
  );
};

export default SolucoesForm;
