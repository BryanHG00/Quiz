import React, {useContext} from 'react';
import { QuizContext } from '../helpers/Context.js';
import '../App.css';

export default function MainMenu() {
    const {setGameState, maxScore} = useContext(QuizContext)
    return (
        <>
            
            <div className='contenedorMenu'>
                <button onClick={() => {setGameState("Quiz")}}>Empezar quiz</button>

                <h3>Máximo puntaje: {maxScore}</h3>

                
            </div>
        </>
    
  )
}