import React, { useEffect, useRef, useState } from 'react';
import Post from '../../components/Post/Post';
import Header from '../../components/Header/Header';
import CommentIcon from '../../components/Comment/comment';
import { useNavigate } from 'react-router-dom';
import Plus from '../../components/Plus/Plus';
import share from '../../assets/sharebtn.png'
import plus from '../../assets/plus.png'
import comment from '../../assets/comentbtn.png'
import like from '../../assets/likebtn.png'
import likepreto from '../../assets/likepreto.png'
import user from '../../assets/user.png'
import axios from 'axios';
import Assunto from '../Assunto/Assunto';


function Feed() {

  const [liked, setLiked] = useState(false);

  const [data, setData] = useState([])
  const todosposts = useRef(null);

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
  

  const navigate = useNavigate();

  const goToAssunto = () =>{
    navigate('/assunto')
  }
  
 
  return (
    <>
    <Header/>
    <div className="App" ref={todosposts}>
      {data.map((item) => {
        const {id, descricao, user_id, created_at, title} = item;
        
        return (
          <div key={id}>        
            <main>
              <div className="comment-container" >

                {/* <Post idPOst: { id } descricao: {descricao} /> */}

                {/* <Assunto
                idPost={id}
                > */}
                <div className="conteudoDoPost" onClick={goToAssunto}>
                  
                  <div>
                    <img src={user} alt="Imagem de Perfil" className="user" />
                    <p>{user_id}</p>
                    <Assunto idPost={id}/>
                  </div>
                  <div className="postText">
                    <h2>{title}</h2>
                    <p>
                      {descricao}
                    </p>
                  </div>
                </div>
                {/* </Assunto> */}


                <div className="space"></div>
                <div className="sessaoBotoes">
                  <button className="button">
                    <img src={share} id="btnshare" alt="" />
                    <p>Compartilhar</p>
                  </button>
                  

                    <CommentIcon 
                      idPost={ id }
                      icon={ comment }                   
                    />

        

                  <button className="button">
                    <img
                      src={liked ? likepreto : like}
                      id="btnImg"
                      alt=""
                      onClick={() => setLiked(!liked)}
                    />
                    <p>Like</p>
                  </button>

                    {/* <button className="button">
                      <img src={like} id="btnImg" alt="" />
                      <p>Like</p>
                    </button> */}
                  </div>
                </div>

            </main>
          </div>
        );
      })}
    <Plus/>
    </div>
    </>
  );
}

export default Feed;
