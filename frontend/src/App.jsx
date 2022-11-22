import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Usuários
import { UserProvider } from "./context/UserContext";
import UserLogin from "./components/pages/auth/UserLogin";
import UserSolucoes from "./components/pages/user/solucoes/Solucoes";
import Indtechs from "./components/pages/user/indtechs/Indtechs";

// Administradores
import { AdminProvider } from "./context/AdminContext";
import AdminLogin from "./components/pages/auth/AdminLogin";
import AdminRegistro from "./components/pages/auth/AdminRegistro";
import AdminSolucoes from "./components/pages/admin/solucoes/Solucoes";
import AddSolucao from "./components/pages/admin/solucoes/AddSolucao";
import Empresas from "./components/pages/admin/empresas/Empresas";
import AdminIndtechs from "./components/pages/admin/indtechs/AdminIndtechs";
import User from "./components/pages/admin/usuarios/User";
import IndtechDetails from "./components/pages/user/indtechs/IndtechsDetails";
import SolucoesDetalhes from "./components/pages/user/solucoes/SolucoesDetalhes";
import Paradas from "./components/pages/user/solucoes/filtros/Paradas";
import Engenharia from "./components/pages/user/solucoes/filtros/Engenharia";
import Logistica from "./components/pages/user/solucoes/filtros/Logistica";
import Planejamento from "./components/pages/user/solucoes/filtros/Planejamento";
import Esg from "./components/pages/user/solucoes/filtros/Esg";
import Contato from './components/form/ContatoForm'

export function App() {
  return (
    <div>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route path="/solucoes" element={<UserSolucoes />} />
            <Route path="/indtechs" element={<Indtechs />} />
            <Route path="/indtechs/:id" element={<IndtechDetails />} />
            <Route path="/solucoes/:id" element={<SolucoesDetalhes />} />
            <Route path="/paradas" element={<Paradas />} />
            <Route path="/engenharia" element={<Engenharia />} />
            <Route path="/logistica" element={<Logistica />} />
            <Route path="/planejamento" element={<Planejamento />} />
            <Route path="/esg" element={<Esg />} />
            <Route path="/contato" element={<Contato />} />
            
          </Routes>
        </UserProvider>
        <AdminProvider>
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegistro />} />
            <Route path="/admin/solucoes" element={<AdminSolucoes />} />
            <Route path="/admin/solucoes/add" element={<AddSolucao />} />

            <Route path="/admin/empresas" element={<Empresas />} />
            <Route path="/admin/indtechs" element={<AdminIndtechs />} />
            <Route path="/admin/usuarios" element={<User />} />
          </Routes>
        </AdminProvider>
      </Router>
    </div>
  );
}
