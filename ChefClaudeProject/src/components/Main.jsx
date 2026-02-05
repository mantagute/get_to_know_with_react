import React from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromMistral } from '../ai';
import './Main.css'


export default function Main() {

    const [ingredients, setIngredients] = React.useState([]);

    function addNewIngredient(formData) {
        const newIngredient = formData.get('ingredient');
        setIngredients(prevState => 
            [...prevState,
                newIngredient
            ]);     
    }

    const [recipe, setRecipe] = React.useState('');

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }

    return (
        <main>

            <form className='add-ingredient-form' action={addNewIngredient}>
                
                <input 
                    type="text" 
                    aria-label='Add ingredient' 
                    placeholder='e.g oregano'
                    name='ingredient'
                />

                <button>Add ingredient</button>

            </form>
            
            <IngredientsList getRecipe={getRecipe} ingredients={ingredients}/>
            
            {recipe && <ClaudeRecipe recipe={recipe}/>}

        </main>
    )
}