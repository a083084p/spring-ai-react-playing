import React, { useState } from "react";

function RecipeGenerator() {
    
    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('any');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [recipe, setRecipe] = useState('');
    const [language, setLanguage] = useState('');

    const createRecipe = async () => {
        try {
            const response = await fetch(`http://localhost:8080/create-recipe?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestrictions}&language=${language}`)
            const data = await response.text();
            console.log(data);
            setRecipe(data);
        } catch (error) {
            console.error("Error generating recipe: ", error)
        }
    };

    return (

        <div>
            <h2>Create a Recipe</h2>
            <input
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Enter ingredients (comma seperated)"
            />

            <input
                type="text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Enter cusine type"
            />

            <input
                type="text"
                value={dietaryRestrictions}
                onChange={(e) => setDietaryRestrictions(e.target.value)}
                placeholder="Enter dietary restrictions"
            />

            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                placeholder="Select the language you need the output in!"
            >
                <option value="" disabled>Select language</option>
                <option value="hindi">Hindi</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
            </select>


            <button onClick={createRecipe}>Create Recipe</button>

            <div className="output">
                <pre className="recipe-text">{recipe}</pre>
            </div>

        </div>
    );

}

export default RecipeGenerator;