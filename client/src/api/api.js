import axios from "axios";
const api_key = "37299eda2bf644f7a90f8edb1736f7d6";

export function findRecipesByIngredients(ingredients, numberOfRecipes = 10) {
  let ingredientsString = ingredients.join(",");
  let config = {
    method: "get",
    url: `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsString}&number=${numberOfRecipes}&ranking=2&ignorePantry=true`,
    headers: {
      "x-api-key": api_key,
      Authorization: "Bearer 4239a609f81848440c1a4479492cc8fb5a320ccc",
      "Content-Type": "application/json",
    },
  };
  return axios(config);
}
