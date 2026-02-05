import ReactMarkdown from 'react-markdown'
import './ClaudeRecipe.css'

export default function ClaudeRecipe({recipe}) {
    return(  
            <section className='suggested-recipe-container' aria-live='polite'>
                <h2>Chef Claude Recommends:</h2>
                <ReactMarkdown>
                        {recipe}
                </ReactMarkdown>
            </section>
)}