import React, { useState } from "react";
import ComponenteModal from "./ComponenteModal";

const ModalEdit = ({ children, btnText }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div>
      <button
        className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-2 px-4 rounded mr-6"
        onClick={() => setIsModalVisible(true)}
      >
        {btnText}
      </button>

      {isModalVisible ? (
        <ComponenteModal onClose={() => setIsModalVisible(false)}>
          {children}
        </ComponenteModal>
      ) : null}
    </div>
  );
};

export default ModalEdit;
