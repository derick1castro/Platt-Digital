import React, { useState } from "react";
import ComponenteModal from "../UI/Modal/ComponenteModal";
import ComponenteModalEmpresa from "./Modal/CompenteModalEmpresa";

function ModalEmpresa({ text, children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="flex justify-end">
      <button
        className="text-white bg-blue hover:bg-darkBlue duration-400 transition ease-in-out py-3 m-[20px] px-8 rounded-md text-md"
        onClick={() => setIsModalVisible(true)}
      >
        {text}
      </button>
      {isModalVisible ? (
        <ComponenteModalEmpresa onClose={() => setIsModalVisible(false)}>
          {children}
        </ComponenteModalEmpresa>
      ) : null}
    </div>
  );
}

export default ModalEmpresa;
