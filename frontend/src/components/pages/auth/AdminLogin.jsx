import React from "react";
import img from "../../../assets/base.png";
import img2 from "../../../assets/logo.png";
import LoginAdminForm from "../../form/LoginAdminForm";

function AdminLogin() {
  return (
    <main>
      <section className="w-screen h-screen flex justify-center items-center">
        <div className="border rounded-l-lg w-[550px] h-[700px] items-center flex flex-col">
          <div className="py-[50px]">
            <img className="w-[200px]" src={img2} alt="" />
          </div>
          <div className="p-6 w-[332px] pb-[30px] border rounded-lg">
            <h1 className="text-2xl font-bold pb-5">Área administrativa</h1>
            <LoginAdminForm />
          </div>
        </div>
        <div className="w-[650px] rounded-r-lg">
          <img className="w-[650px] h-[700px] rounded-r-lg" src={img} alt="" />
        </div>
      </section>
    </main>
  );
}

export default AdminLogin;
