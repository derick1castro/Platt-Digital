import React, { useState } from "react";
import Input from "../UI/Input";
import InputSimples from "../UI/InputSimples";
import InputText from "../UI/InputText";

const SolucoesForm = ({ handleSubmit, solucoesData, btnText }) => {
  const [solucoes, setSolucoes] = useState(solucoesData || {});
  const [preview, setPreview] = useState([]);

  function onFileChange(e) {
    setPreview(Array.from(e.target.files));
    setSolucoes({ ...solucoes, images: [...e.target.files] });
  }

  function handleChange(e) {
    setSolucoes({ ...solucoes, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    console.log(solucoes);
    handleSubmit(solucoes);
  }

  return (
    <>
      <section className="max-w-[80%] mx-auto text-[#009cc2] space-y-8 mb-4">
        <h1 className="text-3xl font-bold">Nova Solução</h1>
        <form className="space-y-4" onSubmit={submit}>
          <p className="text-xl font-bold">Resumo</p>
          <div>
            <div className="flex justify-start my-4 ml-8">
              {/* {preview.length > 0
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
                  ))} */}
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
          <InputText
            text="Descrição da solução com X caracteres"
            type="text"
            name="descricao"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.descricao || ""}
          />
          <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />

          <Input
            text="Indtech que realiza"
            type="text"
            name="indtech"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.indtech || ""}
          />

          <Input
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />

          <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />
          <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />
          <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />
          <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />
          <Input
            text="Dores que atende"
            type="text"
            name="dores"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.dores || ""}
          />
          <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />
          <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />
          <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />
          <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />

          <p className="text-xl font-bold">Case</p>

          {/* <Input
            text="Depoimentos"
            type="text"
            name="depoimentos"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.depoimentos || ""}
          />

          <Input
            text="Autor do Depoimento"
            type="text"
            name="autorDepoimento"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.autorDepoimento || ""}
          /> */}

          <Input
            text="Link para case (opcional)"
            type="text"
            name="linkCase"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.linkCase || ""}
          />
          <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />
          <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />
          <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />
          <InputSimples
            text="Características"
            type="text"
            name="caracteristicas"
            placeholder="Add text"
            handleOnChange={handleChange}
            value={solucoes.caracteristicas || ""}
          />

          <div>
            <p className="flex text-xl font-bold">Clientes</p>
            <div className="flex justify-start my-4 space-x-4 ml-8">
              {/* {preview.length > 0
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
                  ))} */}
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
            <p>Setor</p>
            <div>
              <input id="setor" type="checkbox" />
              <label className="ml-3" htmlFor="setor">
                Paradas de manutenção
              </label>
            </div>
            <div>
              <input id="setor" type="checkbox" />
              <label className="ml-3" htmlFor="setor">
                Engenharia e Manutenção
              </label>
            </div>
            <div>
              <input id="setor" type="checkbox" />
              <label className="ml-3" htmlFor="setor">
                Logística e Backoffice
              </label>
            </div>
            <div>
              <input id="setor" type="checkbox" />
              <label className="ml-3" htmlFor="setor">
                Planejamento e Controle
              </label>
            </div>
            <div>
              <input id="setor" type="checkbox" />
              <label className="ml-3" htmlFor="setor">
                ESG
              </label>
            </div>
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
