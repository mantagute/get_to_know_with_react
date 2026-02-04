import React from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
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

    const [recipeShown, setRecipeShown] = React.useState(false);

    function toggleStatus() {
        setRecipeShown((prevState) => !prevState)
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
            
            <IngredientsList toggleStatus={toggleStatus} ingredients={ingredients}/>
            
            {recipeShown && <ClaudeRecipe/>}

        </main>
    )
}