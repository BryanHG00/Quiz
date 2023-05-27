import React, {useContext} from 'react';
import { QuizContext } from '../helpers/Context.js';
import { Question } from '../helpers/QuestionBank.js';

export default function EndScreen() {
  const { setGameState, currentScore, setCurrentScore} = useContext(QuizContext)

  const Fin = () =>{
    setCurrentScore(0);
    setGameState("MainMenu");
  }
  return (
    <>
    <div className='contenedorEnd'>
      

      <h1>Fin del quiz</h1>
      <h3>Tu puntaje: {currentScore}/{Question.length} </h3>
      <button onClick={Fin}>Regresar al menú</button>


    </div>
    </>
  )
}