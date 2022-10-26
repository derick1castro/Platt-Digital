import React from "react";

const ComponenteModal = ({ id = "modal", onClose = () => {}, children }) => {
  const handleOutSideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  return (
    // modal
    <div
      className="w-full h-screen absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.8)] flex justify-center items-center"
      id={id}
      onClick={handleOutSideClick}
    >
      {/* container */}
      <div className="bg-[#fff] text-[#000] w-[25%] h-[80%] flex justify-center items-center ">
        {/* content */}
        <div className="flex flex-col w-full">{children}</div>
      </div>
    </div>
  );
};

export default ComponenteModal;
