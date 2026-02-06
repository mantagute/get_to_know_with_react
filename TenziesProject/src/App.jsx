import { useState } from 'react';
import Die from './components/Die';
import './App.css';

function App() {

  const [diceArray, setDiceArray] = useState(generateAllNewDice);

  const dice = diceArray.map(dieValue => <Die value={dieValue}></Die>)

  console.log(diceArray)

  function generateAllNewDice() {
    const numbersArray = [];

    for (let i = 0 ; i < 10 ; i++){
      numbersArray[i] = Math.floor((Math.random() * 6) + 1);
    }

    return numbersArray 
}

  function rollDice() {
    setDiceArray(generateAllNewDice())
  }

  return (
    <main>
      <div className='dice-container'>
          {dice}
      </div>

      <button className='roll-dice'onClick={rollDice}>Roll</button>
      
    </main>
  )
}

export default App
