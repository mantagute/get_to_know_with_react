import './LanguagesChips.css'
import {languages} from '../languages.js';

export default function LanguagesChips({wrongGuessCount}) {

    const languageElements = languages.map((language, index) => {

        const isLanguageLost = index < wrongGuessCount

        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color,
        }

        return (
            <span 
                className={`chip ${isLanguageLost ? 'lost' : ''}`}
                style={styles} 
                key={language.name}
            >{language.name}</span>
        )
        
    })

    return(
        <section className='languages-chips'>
            {languageElements}
        </section>
    )
}