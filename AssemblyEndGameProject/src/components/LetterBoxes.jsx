import './LetterBoxes.css'

export default function LetterBoxes({currentWord}) {
    
    const wordChars = [...currentWord];
    
    const letterSlots = wordChars.map((letter, index) => {
        return (
            <span 
                key={index} 
                className='letter-slot'>
                {letter.toUpperCase()}
            </span>
        )
    })

    return (
        <section className='letter-container'>
            {letterSlots}
        </section>
    )

}
