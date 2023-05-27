import './App.css';
import { useState } from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './helpers/Context.js';

function App() {
  const [gameState, setGameState] = useState("MainMenu");
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  return (
    <div className="App">
      <div>
      <h1 className='titulo__gral rell'>Quiz Animales</h1>
      </div>
      <QuizContext.Provider value={{ setGameState, currentScore,setCurrentScore ,maxScore, setMaxScore}}>
        {gameState === "MainMenu" && <MainMenu />}
        {gameState === "Quiz" && <Quiz />}
        {gameState === "EndScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
