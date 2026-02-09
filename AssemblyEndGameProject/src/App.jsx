import { useState } from 'react';
import Header from './components/Header';
import GameStatus from './components/GameStatus';
import LanguagesChips from './components/LanguagesChips';
import LetterBoxes from './components/LetterBoxes';
import Keyboard from './components/Keyboard';
import StartNewGame from './components/StartNewGame';
import { getRandomWord } from './utils';
import './App.css'
import { languages } from './languages';
import Confetti from 'react-confetti'

function App() {

  const [currentWord, setCurrentWord] = useState(() => getRandomWord());

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

  function resetGame() {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])

  }

  return (
      <>
          <Header/>
          <GameStatus 
            isGameLost={isGameLost} 
            isGameWon={isGameWon} 
            isGameOver={isGameOver} 
            currentWord={currentWord} 
            guessedLetters={guessedLetters}
            wrongGuessCount={wrongGuessCount}
          />
          <LanguagesChips wrongGuessCount={wrongGuessCount}/>
          <LetterBoxes 
            currentWord={currentWord} 
            guessedLetters={guessedLetters}
            isGameLost={isGameLost}
          />
          <Keyboard 
            currentWord={currentWord} 
            guessedLetters={guessedLetters} 
            handleAddNewLetterGuess={addNewLetterGuess}
            isGameOver={isGameOver}
          />
          {isGameWon && <Confetti/>}
          <StartNewGame isGameOver={isGameOver} handleResetGame={resetGame}/>
      </>
  )

}

export default App
