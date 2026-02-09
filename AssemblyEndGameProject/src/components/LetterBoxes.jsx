import './LetterBoxes.css'

export default function LetterBoxes({currentWord, guessedLetters, isGameLost}) {
    
    const wordChars = [...currentWord];
    
    const letterSlots = wordChars.map((letter, index) => {
        
        return (
            <span 
                key={index} 
                className={`letter-slot ${isGameLost  && !guessedLetters.includes(letter) ? 'not-guessed-letter' : '' }`.trim()}>
                {guessedLetters.includes(letter) || isGameLost ? letter.toUpperCase() : ''}
            </span>
        )
    })

    return (
        <section className='letter-container'>
            {letterSlots}
        </section>
    )

}
