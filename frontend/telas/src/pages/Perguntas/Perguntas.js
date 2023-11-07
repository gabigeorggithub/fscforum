import Header from "../../components/Header/Header"
import './Perguntas.css'
import user from '../../assets/user.png'
import check from '../../assets/check.png'
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Perguntas = () => {
    const [title, setTitle] = useState('');
    const [descricao, setDescricao] = useState('');
    const user_id = localStorage.getItem('token');
    const [data, setData] = useState([])

    console.log(localStorage)

    const usuarios = async () => {
      await axios
        .get("http://localhost:3008/api/users")
        .then((res) => {
          console.log(res.data.data)
          setData(res.data.data)
        })
    }
  
    useEffect(() => {        
      usuarios();
    }, [])
  
    console.log(data)


    const CadastrarPost =  async (e) => {
        e.preventDefault()

  
        const credentials = {
          title, 
          descricao,
          user_id
        };
    
        axios.post('http://localhost:3008/api/post/create', credentials,{
          headers:{
            'Content-Type': 'application/json',
          },
    
        })
        .then(response =>{
          alert(response.data.message)
          goToFeed();

        })
        .catch(error => console.log(error))
      };
  

    const navigate = useNavigate();
    const goToFeed = () => {
        navigate('/feed')
    }
    return (
        <>
        <Header/>
        <div className="background-imagepgt">

        <form onSubmit={CadastrarPost}>
            <div class="container2">

            <input 
            type="text" 
            class="rounded-input" 
            placeholder="Faça uma pergunta/inicie uma discussão:" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            </div>

            <div className="quadrado2">
            <input 
            type="text" 
            class="rounded-input3" 
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            />
            {/* <input
              type="hidden"
              value= "1"
              name='user_id'
              ref={user_id}
              // onChange={(e) => setTipoUsuario(e.target.value)}
            /> */}
            

            <div className="user-container2">
            <img src={user} className="user2" alt="User" />
            <span className="user-text2">@nomedeusuario</span>
            </div>

            <div className="check-container2">
            <button type="submit"><img src={check} className="check2"/></button>
            </div></div>
            
            </form>
            
            </div>

  
        </>
    );
  };
  
  export default Perguntas;