import React from 'react';

function Recipe({recipeData}) {
    return (
        <div className='recipe'>
            <div className='recipe-header'>
                <h2 className='recipe-name'>{recipeData.name}</h2>
                <p className='recipe-description'>{recipeData.description}</p>
            </div>
            <ul className='recipe-ingredients'>
                {recipeData.ingredients.map((entry, idx) => <li id={`${recipeData.name}-ingredient-${idx}`} className='recipe-ingredient'>{entry}</li>)}
            </ul>
        </div>
    )
}

export default Recipe;
