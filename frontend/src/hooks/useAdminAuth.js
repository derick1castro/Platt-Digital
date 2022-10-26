import api from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import useFlashMessage from "./useFlashMessage";

export default function useAdminAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  // const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
  }, []);

  async function registerAdmin(admin) {
    let msgText = "Cadastro realizado com sucesso!";
    let msgType = "success";

    try {
      const data = await api.post("/admin/register", admin).then((response) => {
        return response.data;
      });

      await useAdminAuth(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = "error";
    }

    setFlashMessage(msgText, msgType);
  }

  async function useAdminAuth(data) {
    setAuthenticated(true);

    localStorage.setItem("token", JSON.stringify(data.token));

    navigate("/admin/solucoes"); // adicionar página depois
  }

  async function loginAdmin(admin) {
    let msgText = "Login realizado com sucesso";
    let msgType = "success";

    try {
      const data = await api.post("/admin/login", admin).then((response) => {
        return response.data;
      });

      await useAdminAuth(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = "error";
    }
  }

  function logoutAdmin() {
    const msgText = "Logout realizado com sucesso!";
    const msgType = "success";

    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    navigate("/admin/login");

    setFlashMessage(msgText, msgType);
  }

  return { authenticated, registerAdmin, logoutAdmin, loginAdmin };
}
