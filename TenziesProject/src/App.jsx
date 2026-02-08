import { useState } from 'react';
import Die from './components/Die';
import './App.css';
import Confetti from 'react-confetti'

function App() {

  const [diceArray, setDiceArray] = useState(() => generateAllNewDice);

  function checkGameConditions() {
    const diceSet = new Set();
    let index = 0
    for (index = 0 ; index < diceArray.length ; index++) {
        if(diceArray[index].isHeld) {
            diceSet.add(diceArray[index].value)
        }
        else {
            return false
        }
    }
    if (index === diceArray.length && diceSet.size === 1) {
        return true
    } 
}

const gameWon = checkGameConditions()

  const diceElements = diceArray.map(dieObject => (
    <Die 
      key={dieObject.id} 
      value={dieObject.value} 
      isHeld={dieObject.isHeld} 
      handleHold={hold}
      id={dieObject.id}
    ></Die>
  ))

  function generateAllNewDice() {

    const numbersArray = [];

    for (let i = 0 ; i < 10 ; i++){
      numbersArray[i] = {
        value: Math.floor((Math.random() * 6) + 1),
        isHeld: false,
        id: i
      }
    }

    return numbersArray 
}

  function rollDice() { 
    if (!gameWon){
      setDiceArray(prevState => prevState.map(die =>
        !die.isHeld ? {...die, value: Math.floor((Math.random() * 6) + 1)} : die
      ))
    }
    else {
      setDiceArray(generateAllNewDice());

    }
    
  }

  function hold(id) {
    setDiceArray(prevState => prevState.map(die => 
      die.id === id ? { ...die, isHeld: !die.isHeld } : die
    ));
  }

  return (
      <main>
            {gameWon && <Confetti/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>{gameWon ? 'New Game' : 'Roll'}</button>
        </main>
  )
}

export default App
