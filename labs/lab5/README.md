# Lab 5 - CSCI 3172

* *Date Created*: 04 March 2026
* *Last Modification Date*: 15 March 2026
* *Lab Netlify URL*: <http://example.com/>
* *Lab Gitlab URL*: <http://example.com/>
* *Lab GitHub URL*: <http://example.com/>


## Authors

* [Paras Nath Seth](paras@dal.ca) - (Developer)

## Summary of Website

- The website helps you decide what to ccook based on the ingredients you enter and any optional dietary restrictions.

- It uses the Spoonacular API to fetch recipes that match the user's criteria and displays them in cards. 

- Each recipe comes with a title, image, ready time, servings, health score and a link to view the full recipe on the source website.

## Issues Encountered:

- The main issue I encountered was with setting up and running Jest tests for my frontend. I had trouble/errors with the syntax and configuration, which caused errors when trying to run the tests. I had to lots of some research and troubleshooting to get the tests working properly.

## Testing

- In addition to adding unit tests for the Frontend and Backend, I also manually tested the website by trying out different combinations of ingredients and dietary restrictions to see if the correct recipes were being returned. 

- I also manually tested the form validation by entering invalid input (e.g.. leaving the ingredients field empty, entering ingredients without commas, etc.) to ensure that the appropriate error messages were being displayed.

- I then tested responsiveness and tested the website on different browsers to ensure compatibility.


## Built With

* Frontend: HTML + CSS + JavaScript, Bootstrap (https://getbootstrap.com)
* Backend: [Express](https://expressjs.com/), [Node.js](https://nodejs.org), [Netlify Functions](https://www.netlify.com/platform/core/functions/)
* API: [Spoonacular API](https://spoonacular.com/food-api)
* Testing: [Jest](https://jestjs.io/), [Supertest](https://www.npmjs.com/package/supertest)
* Deployment: [Netlify](https://www.netlify.com/)


## Sources Used

### Spoonacular API - api.js

*Lines 25 - 30*
```javascript
let apiUrl;
if (diet && diet != "none") {
    apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${ingredients}&diet=${diet}&addRecipeInformation=true`;
} else {
    apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${ingredients}&addRecipeInformation=true`;
}

```
The code above was created by referencing the official [Spoonacular API Docs](https://spoonacular.com/food-api/docs#Search-Recipes-Complex), specifically the section on the complexSearch endpoint which is used to search for recipes based on various criteria.

```bash
GET https://api.spoonacular.com/recipes/complexSearch
```

<!---How---> 
- The code in [Spoonacular API Docs](https://spoonacular.com/food-api/docs#Search-Recipes-Complex) was implemented to show how to construct the API URL for the complexSearch endpoint, including how to include query parameters such as ingredients and diet.

 <!---Why---> 
-[Spoonacular API Docs](https://spoonacular.com/food-api/docs#Search-Recipes-Complex)'s Code was used because I needed to be able to filter recipes by BOTH ingredients and diet, and the complexSearch endpoint allows for multiple query parameters to be included in the API request. I also used the docs to understand how the API works in general.

<!---How--->
- [Spoonacular API Docs](https://spoonacular.com/food-api/docs#Search-Recipes-Complex)'s Code was modified by adding conditional logic to check if the user has selected a diet option (other than "none") and constructing the API URL accordingly, ensuring that the diet parameter is only included in the API request if a valid diet option is selected.


### Spoonacular API (List of Supported Diets) - index.htnml 

*Lines 23 - 30*

```html
    <option value="gluten-free">Gluten Free</option>
    <option value="ketogenic">Ketogenic</option>
    <option value="vegetarian">Vegetarian</option>
    <option value="vegan">Vegan</option>
    <option value="pescetarian">Pescetarian</option>
    <option value="paleo">Paleo</option>
    <option value="primal">Primal</option>

```

The code above was created after referencing the official [Spoonacular API 'Diet' Docs](https://spoonacular.com/food-api/docs#Diets) to get the list of supported diets that can be used to query the API to filter by dietary preferences. 


<!---How---> 
- The [Spoonacular API 'Diet' Docs](https://spoonacular.com/food-api/docs#Diets) are provided to show the list of supported diets that can be used with the Spoonacular API.

<!---Why---> 
- [Spoonacular API 'Diet' Docs](https://spoonacular.com/food-api/docs#Diets) were used because the Lab requires us to include the option to filter by different diets, and this section of the docs provided the necessary information on what diet options are supported by the API.

<!---How---> 
- [Spoonacular API 'Diet' Docs](https://spoonacular.com/food-api/docs#Diets) were referenced when creating the dropdown menu for dietary restrictions in the form, ensuring that the options in the dropdown correspond to the supported diet types that can be used in the API query.


### SVG Emoji Favicon - index.html

*Line 7*

```html
<link rel="icon" type="image/svg+xml" sizes="any" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍜</text></svg>"/>
```

The code above was created by adapting the code in [Matan Borenkraout's Article](https://medium.com/@matanbobi/how-to-use-emojis-as-favicons-371795662465) as shown below: 

```html
<link rel="icon" type="image/svg+xml" sizes="any" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥬</text></svg>"/>
```

<!---How---> 
- The code in [Matan Borenkraout's Article](https://medium.com/@matanbobi/how-to-use-emojis-as-favicons-371795662465) was implemented by encoding an SVG image containing an emoji and using it as a favicon for the website.

<!---Why---> 
- [Matan Borenkraout's Article](https://medium.com/@matanbobi/how-to-use-emojis-as-favicons-371795662465)'s Code was used because I wanted to use an emoji as a favicon for my recipe website, and this article provided a simple and effective way to do so using an SVG image encoded in the href attribute of the link tag.

<!---How---> 
- [Matan Borenkraout's Article](https://medium.com/@matanbobi/how-to-use-emojis-as-favicons-371795662465)'s Code was modified by changing the emoji in the SVG from 🥬 to 🍜 to fit the theme of my recipe website.


### Regex101 to Develop Regex - script.js

*Line 46*

```javascript
const ingredientsRegex = /^[a-zA-Z\d\s]+(,[a-zA-Z\d\s]+)*$/;
```

The code above was developed using [Regex101](https://regex101.com/) as a playground.

<!---How--->
- [Regex101](https://regex101.com/) is a website that provides a web interface for testing and developing regular expressions.

<!---Why---> 
- [Regex101](https://regex101.com/)'s was used to create and test the regex pattern for validating the ingredients input field in my form.

<!---How---> 
- [Regex101](https://regex101.com/)'s was used to iteratively develop the regex pattern by testing different variations and ensuring that it correctly validates comma-separated lists of ingredients while allowing for spaces and alphanumeric characters.



### Bootstrap Card Component - script.js

*Lines 25 - 36*

```javascript
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

```

The code above was created by adapting the code in [Bootstrap Card Component Docs](https://getbootstrap.com/docs/5.0/components/card/) as shown below: 

```html
        <div class="card">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

```

<!---How---> 
- The code in [Bootstrap Card Component Docs](https://getbootstrap.com/docs/5.0/components/card/) was implemented to show how to style and structure a card component using the classes provided by Bootstrap.

<!---Why--->
- [Bootstrap Card Component Docs](https://getbootstrap.com/docs/5.0/components/card/)'s Code was used because I wanted to display the recipe information in a nice, compact way. The card component provided by Bootstrap seemed like a great way to do that.

<!---How--->
- [Bootstrap Card Component Docs](https://getbootstrap.com/docs/5.0/components/card/)'s Code was modified by changing the structure of the card to fit the recipe information I wanted to display, and by using different Bootstrap classes to get to the style I wanted.


### Bootstrap Form Styling - index.html

*Lines 17-18 and Line 21*

```html

<label for="ingredients" class="form-label mb-3"><b>Ingredients (please separate each ingredient by commas):</b></label>
<textarea id="ingredients" class="form-control" rows="3" placeholder="e.g., chicken, rice, tomatoes, eggs"></textarea>

...
...

<label for="diet" class="form-label mb-3"><b>Dietary Restrictions (Optional):</b></label>

```

The code above was created by adapting the code in [Bootstrap Form Control Docs](https://getbootstrap.com/docs/5.0/forms/form-control/) as shown below: 

```html
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
```

<!---How---> 
- The code in [Bootstrap Form Control Docs](https://getbootstrap.com/docs/5.0/forms/form-control/)  was implemented to show how to use Bootstrap's form control classes to style form elements.

<!---Why--->
- [Bootstrap Form Control Docs](https://getbootstrap.com/docs/5.0/forms/form-control/) 's Code was used because I wanted to use Bootstrap's styling for my form elements to make them look nicer.

<!---How--->
- [Bootstrap Form Control Docs](https://getbootstrap.com/docs/5.0/forms/form-control/) 's Code was modified by changing the structure of the form elements to fit the inputs I needed for my recipe search form. I mainly just used the 'form-label' and 'form-control' classes in the example code.


### Bootstrap Form Select - index.html

*Line 22*

```html
<select id="diet" class="form-select">

```

The code above was created by adapting the code in [Bootstrap Form Select Docs](https://getbootstrap.com/docs/5.0/forms/select/) as shown below: 

```html
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

```

<!---How---> 
- The code in [Bootstrap Form Select Docs](https://getbootstrap.com/docs/5.0/forms/select/) was implemented to show how to use Bootstrap's form select component to style  dropdown menu.

<!---Why---> 
- [Bootstrap Form Select Docs](https://getbootstrap.com/docs/5.0/forms/select/)'s Code was used because I wanted to make my dropdown look nicer and experiment with the class I came across in the docs. 

<!---How---> 
- [Bootstrap Form Select Docs](https://getbootstrap.com/docs/5.0/forms/select/)'s Code was modified by changing the options in the select menu to fit the dietary restrictions I wanted to include as filter options for my recipe search form.


### Regex101 to Develop Regex - script.js

*Line 46*

```javascript
const ingredientsRegex = /^[a-zA-Z\d\s]+(,[a-zA-Z\d\s]+)*$/;
```

The code above was developed using [Regex101](https://regex101.com/) as a playground.

<!---How--->
- [Regex101](https://regex101.com/) is a website that provides a web interface for testing and developing regular expressions.

<!---Why---> 
- [Regex101](https://regex101.com/)'s was used to create and test the regex pattern for validating the ingredients input field in my form.

<!---How---> 
- [Regex101](https://regex101.com/)'s was used to iteratively develop the regex pattern by testing different variations and ensuring that it correctly validates comma-separated lists of ingredients while allowing for spaces and alphanumeric characters.


### StackOverflow (Fixing Jest SyntaxError) - package.json

*Line 8*

```bash
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
```

The code above was created by adapting the code in [geeky01adarsh's StackOverflow Answer](https://stackoverflow.com/a/76529138) as shown below: 

```bash
    "test":"node --experimental-vm-modules node_modules/jest/bin/jest.js"
```

<!---How---> 
- The code in [geeky01adarsh's StackOverflow Answer](https://stackoverflow.com/a/76529138) was implemented to show how to fix an error caused when trying to run Jest tests. The error was "SyntaxError: Cannot use import statement outside a module".

<!---Why---> 
- [geeky01adarsh's StackOverflow Answer](https://stackoverflow.com/a/76529138) was used because I needed to be able to run my unit tests using Jest, to meet the lab's requirements.

<!---How---> 
- [geeky01adarsh's StackOverflow Answer](https://stackoverflow.com/a/76529138)'s Code was copied over exactly and addded to the package.json file's "test" command (there was nothing to modify as this was more of a fix).


### StackOverflow (Fixing Jest __dirname issue) - frontend.test.js

*Line 6*

```javascript
    const __dirname = dirname(fileURLToPath(import.meta.url));
```

The code above was created by adapting the code in [GOTO 0's StackOverflow Answer](https://stackoverflow.com/a/50052194) as shown below: 

```javascript
    import { dirname } from 'node:path';
    import { fileURLToPath } from 'node:url';

    const __dirname = dirname(fileURLToPath(import.meta.url));
```

<!---How---> 
- The code in [GOTO 0's StackOverflow Answer](https://stackoverflow.com/a/50052194) was implemented to show how to workaround the issue of '__dirname' being unavailable when trying to run Jest tests with ES modules.

<!---Why---> 
- [GOTO 0's StackOverflow Answer](https://stackoverflow.com/a/50052194) was used because I needed to be able to define '__dirname' so that I could run my unit tests using Jest, to meet the lab's requirements.

<!---How---> 
- [GOTO 0's StackOverflow Answer](https://stackoverflow.com/a/50052194)'s Code was adapted by adding the same imports and copying the line that defines '__dirname' to fix my errors. 



## Artificial Intelligence Tools Used
- N/A

## Acknowledgments

* This lab was **heavily** inspired by the Lab Project Guide provided on Brightspace alongside the Lab instructions (Frontend, Backend, Tests, Netlify): https://dal.brightspace.com/d2l/le/content/415823/viewContent/5266263/View

* TA Hardison Wang for clarifying that tests aren't needed and it's okay if Jest tests aren't working during the Lab session on Monday, March 09, 2026.

* CSCI 2170 where I also learned Bootstrap styling, fetch(), serverside scripting (including with express) and async concepts in JavaScript.