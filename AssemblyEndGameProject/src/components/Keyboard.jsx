import './Keyboard.css'

export default function Keyboard() {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const alphabetLetters = [...alphabet]

    const keyboardElements = alphabetLetters.map(letter => {
        return(
            <button 
                key={letter}>
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