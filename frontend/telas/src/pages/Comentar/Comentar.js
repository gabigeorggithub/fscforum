import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import user from '../../assets/user.png'
import check from '../../assets/check.png'
import { useNavigate, useParams } from "react-router-dom";
import './Comentar.css'
import axios from 'axios';

const Comentar = ({ idPost, icon }) => {
  console.log(idPost)

  const [commentsList, setCommentsList] = useState([]);
  const [descricao, setDescricao] = useState('');
  const user_id = localStorage.getItem('token');
  const [data, setData] = useState([]);
  const { id } = useParams();

  console.log(localStorage)

  const usuarios = async () => {
    await axios
      .get("http://localhost:3008/api/users")
      .then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
      })
  }

  // const fetchComments = async () => {
	// 	const response = await axios
  //   .get('http://localhost:3008/api/comments/' + id);
		
	// 	if (response.data.success) {        
	// 		setCommentsList(response.data.data);
	// 	} else {
	// 		alert('Não foi criado comentário');
	// 		navigate('/dashboard');
	// 	}		
	// };

	// useEffect(() => {		
	// 	fetchComments();
	// }, []);


  useEffect(() => {        
    usuarios();
  }, [])

  const posts = async () => {
    await axios
      .get("http://localhost:3008/api/posts")
      .then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
      })
  }

  useEffect(() => {        
    posts();
  }, [])

  console.log(data)


  const CadastrarComentario =  async (e) => {
    const post_id = id; //!!!!!!!!!!!!!!!!!!! TEM QUE PEGAR QUANDO EU CLICAR NO TAL POST
      e.preventDefault()

      const credentials = { 
        descricao,
        user_id,
        post_id
      };
      console.log(credentials);          
      axios.post('http://localhost:3008/api/comment/create', credentials,{
        headers:{
          'Content-Type': 'application/json',
        },
  
      })
      .then(response =>{
        alert(response.data.message)
        goToAssunto(idPost);


      })
      .catch(error => console.log(error))
    };


  const navigate = useNavigate();
  const goToFeed = () => {
      navigate('/feed')
  }

    const goToAssunto = () => {
        navigate('/assunto')
    }

  

  return (
    <>

    <Header/> 
    <div className='background-imagecomm'>
    <div class="container">
    <h2 className='titulozinho'>Comentar</h2>
    </div>

    <div className="quadrado">
    <form onSubmit={ CadastrarComentario }>
    <input 
    type="text" 
    class="rounded-input2" 
    placeholder='Escreva seu comentário...'
    value={ descricao }
    onChange={(e) => setDescricao(e.target.value)}
    name='reply'
    
    ></input>

    <div className="user-container">
    <img src={user} className="user" alt="User" />
    <span className="user-text">@nomedeusuario</span>
    </div>

    <div className="check-container">
    <button type="submit" 
    >
    <img src={check} className="check"></img></button>
    </div></form>
    </div>

    </div>

  </>

  );
};

export default Comentar;