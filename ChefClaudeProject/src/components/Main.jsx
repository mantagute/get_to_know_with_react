import React from 'react';
import './Main.css'


export default function Main() {

    const [ingredients, setIngredients] = React.useState([]);

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))


    function addNewIngredient(formData) {
        const newIngredient = formData.get('ingredient');
        setIngredients(prevState => 
            [...prevState,
                newIngredient
            ]);     
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

            <ul>
                {ingredientsListItems}
            </ul>

        </main>
    )
}