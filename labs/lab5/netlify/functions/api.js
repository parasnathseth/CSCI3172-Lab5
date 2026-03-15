import express from "express";
import serverless from "serverless-http";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const api = express();
const router = express.Router();

const API_KEY = process.env.SPOONACULAR_API_KEY;

router.get("/recipes", async (reqest, response) => {
    const ingredients = reqest.query.ingredients;
    const diet = reqest.query.diet;

    try {

        if (!ingredients) {
            response.status(400);
            response.json({ error: "Ingredients are required" });
            return;
        }
        
        let apiUrl;
        if (diet && diet != "none") {
            apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${ingredients}&diet=${diet}&addRecipeInformation=true`;
        } else {
            apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${ingredients}&addRecipeInformation=true`;
        }

        const apiResponse = await fetch(apiUrl);
        const apiData = await apiResponse.json();
        console.log("DATA FROM SPOONACULAR:", apiData);

        if (apiResponse.status != 200 && apiResponse.statusMessage != "OK") {
            response.status(apiResponse.status);
            response.json({ error: apiData.message});
            return;
        }

        response.json({ recipes: apiData.results});

    } catch (error) {
        console.error(`Error in API: ${error}`);
        response.status(500);
        response.json({ error: "A Server error occurred" });
    }
});

api.use("/api/", router);
export const app = api;
export const handler = serverless(api);