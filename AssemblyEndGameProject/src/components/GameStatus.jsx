import './GameStatus.css'
import { getFarewellText } from '../utils';
import { languages } from '../languages';

export default function GameStatus({isGameLost, isGameWon, isGameOver, guessedLetters, currentWord, wrongGuessCount}) {


    const lastGuess = guessedLetters.at(-1) 
    
    const isLetterInSecretWord = (lastGuess && currentWord.includes(lastGuess));

    const gameStatusClass = `
        game-status 
        ${isGameWon ? "won" : ""} 
        ${!isGameOver && lastGuess && !isLetterInSecretWord ? 'farewell' : '' } 
        ${isGameLost ? "lost" : ""}`.trim();

    function renderGameStatus() {
        if (!isGameOver && lastGuess && !isLetterInSecretWord) {
            return (
                <p 
                    className='farewell-message'>
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </p>
            )
        }
        if (isGameWon) {
            return(
                <>
                    <h2>You Win!</h2>
                    <p>Well Done! 🎉</p>
                </>
            )
        } 
        if (isGameLost) {
            return(
                <>
                    <h2>Game Over!</h2>
                    <p>You lose! Better Start learning Assembly</p>
                </>
            )
        }
        return null
    }

    return(
        <section className={gameStatusClass}>
            {renderGameStatus()}
        </section>
    )
    
}