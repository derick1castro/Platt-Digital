import React from "react";

const ComponenteModalContato = ({ id = "modal", onClose = () => {}, children }) => {
  const handleOutSideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  return (
    // modal
    <div
      className="w-full h-[1790px] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.8)] flex justify-center items-center"
      id={id}
      onClick={handleOutSideClick}
    >
      {/* container */}
      <div className="rounded-lg bg-[#fff] text-[rgba(0,0,0,0.40)] w-[65%] sm:w-[400px]  flex justify-center items-center">
        {/* content */}
        <div className="flex flex-col w-full h-[39rem]">{children}</div>
      </div>
    </div>
  );
};

export default ComponenteModalContato;