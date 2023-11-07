// import React, { useEffect, useRef, useState } from 'react';
// import Header from '../../components/Header/Header';
// import Post from '../../components/Post/Post';
// import SubPost from '../../components/SubPost/SubPost';
// import plus from '../../assets/plus.png'
// import { useNavigate, useParams } from 'react-router-dom';
// import './Assunto.css'
// import Plus from '../../components/Plus/Plus';
import axios, { Axios } from 'axios';
import { useEffect, useRef, useState } from 'react';

function Assunto(idPost) {

  const [data, setData] = useState([])
  console.log(idPost); //ta pegando certinho



const vercomments = async () => {
    //e.preventDefault();   

    console.log(idPost); //ta pegando certinho

    const informacoes = {
      idPost
    }

    axios.get('http://localhost:3008/api/comments/' + idPost, informacoes,{
      headers:{
        'Content-Type': 'application/json',
      },
    })
    .then(response =>{
      console.log(response.data.data)
      setData(response.data.data)
      alert(response.data.message)

    })
    .catch(error => console.log(error))
  };

//   useEffect(() => {        
//     vercomments();
//   }, [])


  return (
    <>
    <button type='submit' onClick={vercomments}>Ver coments</button>
    {data.map((item) => {
        const {id, descricao, user_id, created_at, title} = item;
        
        return (
          <>
          </>
        );
      })}
    </>

  );
}

export default Assunto;