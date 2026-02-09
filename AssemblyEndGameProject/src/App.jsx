import { useState } from 'react';
import Header from './components/Header';
import GameStatus from './components/GameStatus';
import LanguagesChips from './components/LanguagesChips';
import LetterBoxes from './components/LetterBoxes';
import Keyboard from './components/Keyboard';
import StartNewGame from './components/StartNewGame';
import './App.css'
import { languages } from './languages';

function App() {

  const [currentWord, setCurrentWord] = useState('react');

  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length;

  const isGameLost = (wrongGuessCount >= languages.length - 1)

  const isGameWon =  currentWord.split('').every(letter => guessedLetters.includes(letter))

  const isGameOver = (isGameLost || isGameWon);
  
  function addNewLetterGuess(letter) {
      setGuessedLetters(prevState => 
          prevState.includes(letter) ? prevState : [...prevState, letter]
      )   
  }

  return (
      <>
          <Header/>
          <GameStatus isGameLost={isGameLost} isGameWon={isGameWon} isGameOver={isGameOver}/>
          <LanguagesChips wrongGuessCount={wrongGuessCount}/>
          <LetterBoxes currentWord={currentWord} guessedLetters={guessedLetters}/>
          <Keyboard 
            currentWord={currentWord} 
            guessedLetters={guessedLetters} 
            handleAddNewLetterGuess={addNewLetterGuess}
          />
          <StartNewGame isGameOver={isGameOver}/>
      </>
  )

}

export default App
