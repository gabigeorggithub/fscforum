import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import user from '../../assets/user.png'
import check from '../../assets/check.png'
import { useNavigate, useParams } from "react-router-dom";
//import './Comentar.css'
import axios from 'axios';

const Comentar = ({ idPost, icon }) => {
  const navigate = useNavigate();

  const goToComentar = () =>{
    navigate('/comentar/' + idPost);
  };

  return (
    <>
    <button className="button">
      <img src={icon} id="btnImg" alt="" onClick={goToComentar} />
      <p>Comentar</p>
    </button>
  </>

  );
};

export default Comentar;