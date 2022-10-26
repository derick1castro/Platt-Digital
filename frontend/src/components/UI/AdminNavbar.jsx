import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/AdminContext";
import Logo from '../../assets/logo.png'

function AdminNavbar() {
  const { authenticated, logoutAdmin } = useContext(Context);

  return (
    <nav className="flex justify-between py-4 px-6 border-b-2">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-[200px] mr-3" src={Logo} alt="Logo Platt" />
        </Link>
      </div>
      {authenticated ? (
        <ul className="flex items-center list-none">
          <li className="cursor-pointer font-medium py-2 px-3 hover:text-blue transition ease-in-out duration-400 hover:border-b-2 hover:border-blue">
            <Link to="/admin/usuarios">Usuários</Link>
          </li>
          <li className="cursor-pointer font-medium py-2 px-3 hover:text-blue transition ease-in-out duration-400 hover:border-b-2 hover:border-blue">
            <Link to="/admin/empresas">Empresas</Link>
          </li>
          <li className="cursor-pointer font-medium py-2 px-3 hover:text-blue transition ease-in-out duration-400 hover:border-b-2 hover:border-blue">
            <Link to="/admin/solucoes">Soluções</Link>
          </li>
          <li className="cursor-pointer font-medium py-2 px-3 hover:text-blue transition ease-in-out duration-400 hover:border-b-2 hover:border-blue">
            <Link to="/admin/indtechs">Indtechs</Link>
          </li>
          <li
            className="cursor-pointer font-medium py-2 px-3 hover:text-blue transition ease-in-out duration-400 hover:border-b-2 hover:border-blue"
            onClick={logoutAdmin}
          >
            Logout
          </li>
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
}

export default AdminNavbar;
