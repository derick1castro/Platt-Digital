import React, { useState } from "react";
import ComponenteModalContato from "../UI/Modal/ComponenteModalContato";

function ModalContato({ text, children }) {
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
        <ComponenteModalContato onClose={() => setIsModalVisible(false)}>
          {children}
        </ComponenteModalContato>
      ) : null}
    </div>
  );
}

export default ModalContato;
