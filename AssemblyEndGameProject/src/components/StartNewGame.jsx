import './StartNewGame.css'

export default function StartNewGame({isGameOver, handleResetGame}) {
    
    return (
        ( isGameOver &&
            <section className='new-game'>
                <button onClick={handleResetGame}>New Game</button>
            </section>
        )
    )
}