import './GameStatus.css'

export default function GameStatus({isGameLost, isGameWon, isGameOver}) {

    const gameStatusClass = `game-status ${isGameWon ? "won" : ""} ${isGameLost ? "loss" : ""}`.trim();

    function renderGameStatus() {
        if (!isGameOver) {
            return null
        }
        if (isGameWon) {
            return(
                <>
                    <h2>You Win!</h2>
                    <p>Well Done! 🎉</p>
                </>
            )
        } else {
            return(
                <>
                    <h2>Game Over!</h2>
                    <p>You lose! Better Start learning Assembly</p>
                </>
            )
        }
    }

    return(
        <section className={gameStatusClass}>
            {renderGameStatus()}
        </section>
    )
    
}