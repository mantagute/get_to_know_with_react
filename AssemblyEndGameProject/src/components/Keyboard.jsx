import './Keyboard.css'

export default function Keyboard({currentWord, guessedLetters, handleAddNewLetterGuess}) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const alphabetLetters = [...alphabet]

    const keyboardElements = alphabetLetters.map(letter => {
        
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = isGuessed && currentWord.includes(letter);
        
        let className = '';
        if (isGuessed) {
            className = isCorrect ? 'correct-letter' : 'wrong-letter'
        }

        return(
            <button 
                className={className}
                key={letter}
                onClick={() => handleAddNewLetterGuess(letter)}>
                {letter.toUpperCase()}
            </button>
        )
    })

    return(
        <section className='keyboard'>
            {keyboardElements}
        </section>
    )

}