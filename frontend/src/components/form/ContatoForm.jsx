//   return (
//     <div className="container">
//       <h1 className="title">Contato</h1>

//       <form className="form" onSubmit={() => {}}>
//         <input
//           className="input"
//           type="text"
//           placeholder="Digite seu nome"
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//         />
//         <input
//           className="input"
//           type="phone"
//           // placeholder="Digite seu nome"
//           onChange={(e) => setTelefone(e.target.value)}
//           value={telefone}
//         />

//         <input
//           className="input"
//           type="text"
//           placeholder="Digite seu email"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//         />

//         <textarea
//           className="textarea"
//           placeholder="Digite sua mensagem..."
//           onChange={(e) => setMessage(e.target.value)}
//           value={message}
//         />

//         <input className="button" type="submit" value="Enviar" />
//       </form>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import InputTextArea from "../UI/InputTextArea";
import InputSimples from "../UI/InputSimples";

function ContatoForm({ btnText }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "" || telefone === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      telefone: telefone,
    };

    emailjs
      .send(
        "service_w2xz3o8",
        "template_rf2o1iw",
        templateParams,
        "aekJty6FB87mmoSSK"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setTelefone("");
          setMessage("");
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
  }

  return (
    <section className="mt-4 ">
      <form className="flex flex-col " onSubmit={sendEmail}>
        <label className='text' htmlFor="name">Nome Completo:</label>
        <input
          id="name"
          className="py-1 px-2 border rounded font-normal mb-5"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          className="py-1 px-2 border rounded font-normal mb-6"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="telefone">Telefone:</label>
        <input
          id="telefone"
          className="py-1 px-2 border rounded font-normal mb-7"
          type="number"
          placeholder="(27) 9999-9999"
          onChange={(e) => setTelefone(e.target.value)}
          value={telefone}
        />
        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          className="p-2 border rounded font-normal h-[94px] resize-none"
          maxLength={50}
          type="text"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
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

export default ContatoForm;
