const resultsDiv = document.getElementById("resultsContainer");
const loadingText = document.getElementById("loadingText");
const findRecipesButton = document.getElementById("find-recipes-button");

const setErrorMessage = (message, textStyleClass="text-danger") => {
    resultsDiv.innerHTML = `<p class="${textStyleClass} mt-3"><b>Error: ${message}</b></p>`;
}
const clearErrorMessage = () => {
    resultsDiv.innerHTML = "";
}

const showLoadingMessage = () => {
    loadingText.classList.remove("hidden"); 
}
const hideLoadingMessage = () => {
    loadingText.classList.add("hidden");
}

const populateRecipes = (recipesArray) => {
    if (!recipesArray || recipesArray.length == 0) {
        return;
    }
    
    recipesArray.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = "card m-3";
        recipeDiv.innerHTML = `
            <h5 class="card-header">${recipe.title}</h5>
            <img src="${recipe.image}" alt="Image of ${recipe.title}" class="card-img">
            <ul class="card-text text-start mt-2">
                <li><b>Ready in:</b> ${recipe.readyInMinutes} minutes</li>
                <li><b>Servings:</b> ${recipe.servings}</li>
                <li><b>Health Score:</b> ${recipe.healthScore}</li>
            </ul>
            <a href="${recipe.sourceUrl}" class="btn btn-outline-primary m-3">View Recipe</a>
        `;
        resultsDiv.appendChild(recipeDiv);
    });
}

async function getRecipes() {

    const ingredients = document.getElementById("ingredients").value.trim();
    const diet = document.getElementById("diet").value;

    const ingredientsRegex = /^[a-zA-Z\d\s]+(,[a-zA-Z\d\s]+)*$/;
    if (!ingredients) {
        setErrorMessage("Please enter at least one ingredient!");
        return;
    } else if (!ingredientsRegex.test(ingredients)) {
        console.log("Here2");
        setErrorMessage("Please enter ingredients separated by ONE comma each! (only letters, numbers, and commas allowed)");
        return;
    }
    clearErrorMessage();

    try {
        showLoadingMessage();
        const response = await fetch(`/api/recipes?ingredients=${ingredients}&diet=${diet}`);
        const data = await response.json();
        hideLoadingMessage();

        if (data.error) {
            setErrorMessage(data.error);
            return;
        }

        if (!data.recipes || data.recipes.length == 0) {
            setErrorMessage("No recipes found. Please try changing your search criteria!", "text-muted");
            return;
        }

        console.log(`data: ${data.recipes}`);
        populateRecipes(data.recipes);

    } catch (error) {
        console.error(error);
        hideLoadingMessage();
        setErrorMessage("Failed to connect to the server.");
    }
}

findRecipesButton.addEventListener("click", getRecipes);