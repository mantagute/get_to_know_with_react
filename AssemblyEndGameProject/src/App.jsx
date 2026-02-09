import { useState } from 'react';
import Header from './components/Header';
import GameStatus from './components/GameStatus';
import LanguagesChips from './components/LanguagesChips';
import LetterBoxes from './components/LetterBoxes';
import Keyboard from './components/Keyboard';
import StartNewGame from './components/StartNewGame';
import './App.css'

function App() {

  const [currentWord, setCurrentWord] = useState('react');

  return (
      <>
          <Header/>
          <GameStatus/>
          <LanguagesChips/>
          <LetterBoxes currentWord={currentWord}/>
          <Keyboard/>
          <StartNewGame/>
      </>
  )

}

export default App
