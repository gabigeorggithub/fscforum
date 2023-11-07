import React, { useEffect, useRef, useState } from 'react';
import './Post.css'
import Header from '../../components/Header/Header';
import share from '../../assets/sharebtn.png'
import plus from '../../assets/plus.png'
import comment from '../../assets/comentbtn.png'
import like from '../../assets/likebtn.png'
import likepreto from '../../assets/likepreto.png'
import user from '../../assets/user.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Post() {
  
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
  const goToComentar = () =>{
    navigate('/comentar')
  }

  return (   
    <></>
  );
}

export default Post;