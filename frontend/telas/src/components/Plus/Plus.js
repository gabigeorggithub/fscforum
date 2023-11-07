import React from "react"
import plus from '../../assets/plus.png'
import './Plus.css'
import { useNavigate } from 'react-router-dom';

function Plus(){

    const navigate = useNavigate();
    const goToPerguntas = () => {
        navigate('/perguntas')
    }
    return(
        <div className="botaoplus">
            <img src={plus} className="fotobotao" onClick={goToPerguntas}></img>
        </div>

    );
}
export default Plus;