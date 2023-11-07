import React from 'react';
import './Header1.css'
import logoImage from "../../assets/logo.png"
import lupaImage from "../../assets/lupa.png"
import { useNavigate } from 'react-router-dom';



const Header1 = () => {

  const navigate = useNavigate();

// Função para navegar para a página 'RefSenha'
const goToLogin = () => {
  navigate('/login');
};

const goToCadastro = () => {
  navigate('/cadastro')
}

  return (
    <header className="header-container1">
      <div className="left-section1">
        <img src={logoImage} alt="Logo" className="logo1" />
      </div>

        <div className="user-actions1">
          <button onClick={goToLogin} className="login-button1">Entrar</button>
          <button onClick={goToCadastro} className="register-button1">Cadastrar</button>
        </div>
      
    </header>
  );
};

export default Header1;