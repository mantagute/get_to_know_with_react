import { useState } from 'react';
import Die from './components/Die';
import './App.css';

function App() {

  const [diceArray, setDiceArray] = useState(generateAllNewDice);

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
    setDiceArray(prevState => prevState.map(die =>
      !die.isHeld ? {...die, value: Math.floor((Math.random() * 6) + 1)} : die
    ))
  }

  function hold(id) {
    setDiceArray(prevState => prevState.map(die => 
      die.id === id ? { ...die, isHeld: !die.isHeld } : die
    ));
  }

  return (
      <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
  )
}

export default App
