import request from "supertest";
import { app } from "../netlify/functions/api.js"; 

describe("Recipe Recommender API", () => {
    
    it("should return recipe data for valid ingredients", async () => {
        const res = await request(app).get("/api/recipes?ingredients=chicken,rice");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("recipes");
    });

    it("should return error for missing ingredients", async () => {
        const res = await request(app).get("/api/recipes");
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe("Ingredients are required");
    });

    it("should return recipe data when dietary restrictions are provided", async () => {
        const res = await request(app).get("/api/recipes?ingredients=tomatoes&diet=vegan");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("recipes");
    });
    
});