import React, { useEffect } from 'react';
import './Header.css'
import logoImage from "../../assets/logo.png"
import logout from '../../assets/logout.png'
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){
    navigate('/')
    }

  }, [navigate])

  const handleLogOut = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate('/')
  }

  const goToPerguntas = () =>{
    navigate('/perguntas')
  }
  
  return (
    <header className="header-container1">
      <div className="left-section1">
        <img src={logoImage} alt="Logo" className="logo1" />
        <img src={logout} onClick={handleLogOut} alt="sair" className="logout" />
      </div>
      
    </header>
  );
};

export default Header;