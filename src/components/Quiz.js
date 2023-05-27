import React, {useContext, useState} from 'react'
import { QuizContext } from '../helpers/Context.js';
import { Question } from '../helpers/QuestionBank.js';
export default function Quiz() {
  const [numeroPregunta, setNumeroPregunta] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [mostrado, setMostrado] = useState('none');
  const { setGameState, currentScore,setCurrentScore, maxScore, setMaxScore} = useContext(QuizContext);

  const nextQuestion = () =>{
    if(Question[numeroPregunta].answer === optionChosen){
      setCurrentScore(currentScore + 1);
    }

    if(optionChosen === ""){
      setMostrado('block');
    }else{
      setMostrado('none');
      setNumeroPregunta(numeroPregunta + 1);
      colorBotones();
      setOptionChosen("");
    }
  };

  const EvaluarEnviar = () =>{
    if(currentScore > maxScore){
      setMaxScore(currentScore);
    }
    setGameState("EndScreen");
  }

  const colorBotones = () =>{
    const mod = document.getElementById('cuestionario__opciones').getElementsByTagName("button");
    for(var i=0;i<mod.length;i++){
      mod[i].classList.remove("seleccionado");
    }
  }

  const Elegido = (opcion) =>{
    colorBotones();
    setOptionChosen(opcion);
    const ob = document.getElementById(opcion);
    ob.classList.add("seleccionado");
    setMostrado('none');
  }

  return (
    <>
    {numeroPregunta > Question.length - 1 ? (
      EvaluarEnviar()
    ):(<>
    <div className='cabecera-volver'>
      <button className='volverbtn' onClick={()=>{setGameState("MainMenu");setCurrentScore(0)}}><img alt='home' src={require('../imgs/icons/home-ip.png')}></img></button>
      <span> / Pregunta {numeroPregunta + 1}</span>
    </div>
    <div className='cuestionario'>
      <h3>{Question[numeroPregunta].prompt}</h3>
      <h4 style={{display:mostrado, color:'red'}}>Selecciona una opción</h4>
      <div id='cuestionario__opciones' className='cuestionario__opciones'>
        <button id='A' onClick={()=>{Elegido("A")}}>{Question[numeroPregunta].optionA}</button>
        <button id='B' onClick={()=>{Elegido("B")}}>{Question[numeroPregunta].optionB}</button>
        <button id='C' onClick={()=>{Elegido("C")}}>{Question[numeroPregunta].optionC}</button>
        <button id='D' onClick={()=>{Elegido("D")}}>{Question[numeroPregunta].optionD}</button>
      </div>
    </div>

      <button className='siguiente' onClick={nextQuestion}>Siguiente pregunta</button>
      </>
    )}
    </>

  )
}