import './StartNewGame.css'

export default function StartNewGame({isGameOver}) {
    
    return (
        ( isGameOver &&
            <section className='new-game'>
                <button>New Game</button>
            </section>
        )
    )
}