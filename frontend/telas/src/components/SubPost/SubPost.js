import React from "react";
import './SubPost.css'
import user from '../../assets/user.png'
import like from '../../assets/likebtn.png'

function SubPost(){
    return(
        <>
        <div className="comment">
        <h2 id="tituloComent">Comentários</h2>
            <div class="comentarioContainer">
                <div class="conteudoDoPost">
                    <div>
                        <img src={user} alt="Imagem de Perfil" class="user"></img>
                    </div>
                    <div class="postText">
                        <h3>gabi_gata</h3>
                        <p>
                           Eu acho que isso não ta certo não... Vamos rever isso dai heinn.
                        </p>
                    </div>
                </div>
                <div class="botoesComent">
                    <button id="btnLike"><img src={like} id="btnCmt" alt=""></img></button>
                </div>
            </div>
            <div class="comentarioContainer">
                <div class="conteudoDoPost">
                    <div>
                        <img src={user} alt="Imagem de Perfil" class="user"></img>
                    </div>
                    <div class="postText">
                        <h3>dudica</h3>
                        <p>
                           Eu não entendi nada :()
                        </p>
                    </div>
                </div>
                <div class="botoesComent">
                    <button id="btnLike"><img src={like} id="btnCmt" alt=""></img></button>
                </div>
            </div>  
            </div>
        </>

    );
}
export default SubPost;
