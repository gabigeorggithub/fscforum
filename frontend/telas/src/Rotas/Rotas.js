import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaInicial from "../pages/TelaInicial/TelaInicial";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import Feed from "../pages/Feed/Feed";
import Perguntas from "../pages/Perguntas/Perguntas";
import Comentar from "../pages/Comentar/Comentar";
import Assunto from "../pages/Assunto/Assunto";

function Rotas() {
    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<TelaInicial />}/>
                <Route path="login" element={<Login />}/>
                <Route path="cadastro" element={<Cadastro />}/>
                <Route path="feed" element={<Feed/>}/>
                <Route path="perguntas" element={<Perguntas />}/>
                <Route path="comentar/:id" element={<Comentar />}/>
                <Route path="assunto" element={<Assunto />}/>
            </Routes>
        </BrowserRouter>
  
    );
  }
  
  export default Rotas;