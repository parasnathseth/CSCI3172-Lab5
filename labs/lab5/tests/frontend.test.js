import fs from "fs";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from "url"; 
import { JSDOM } from "jsdom";

const __dirname = dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.resolve(__dirname, "../frontend/index.html"), "utf8");

describe("Recipe Recommender App UI", () => {
    let dom, document;

    beforeEach(() => {
        dom = new JSDOM(html);
        document = dom.window.document;
    });

    it("should have a textarea for ingredients input", () => {
        const input = document.querySelector("#ingredients");
        expect(input).not.toBeNull();
        expect(input.tagName.toLowerCase()).toBe("textarea");
    });

    it("should have a select dropdown for dietary restrictions", () => {
        const select = document.querySelector("#diet");
        expect(select).not.toBeNull();
        const veganOption = select.querySelector('option[value="vegan"]');
        expect(veganOption).not.toBeNull();
    });

    it("should have a 'Find Recipes' button", () => {
        const button = document.querySelector("#find-recipes-button");
        expect(button).not.toBeNull();
        expect(button.textContent).toBe("Find Recipes");
    });

    it("should initially have a hidden loading text element", () => {
        const loadingText = document.querySelector("#loadingText");
        expect(loadingText).not.toBeNull();
        expect(loadingText.classList.contains("hidden")).toBe(true); 
    });

    it("should have a result container for displaying recipes", () => {
        const result = document.querySelector("#resultsContainer");
        expect(result).not.toBeNull();
        expect(result.classList.contains("text-center")).toBe(true);
    });
});