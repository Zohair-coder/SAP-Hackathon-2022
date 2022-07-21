import axios from "axios";
const api_key = "37299eda2bf644f7a90f8edb1736f7d6";

export function findRecipesByIngredients(ingredients, numberOfRecipes = 10) {
  let ingredientsString = ingredients.join(",");
  let config = {
    method: "get",
    url: `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${api_key}&ingredients=${ingredientsString}&number=${numberOfRecipes}&ranking=2&ignorePantry=true`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config);
}

export function autocompleteIngredientSearch(query, number = 10) {
  let config = {
    method: "get",
    url: `https://api.spoonacular.com/recipes/716429/information?apiKey=${api_key}`,
    headers: {
      Content: "application/json",
    },
  };
  return axios(config);
}

export function getRecipeInformation(id) {
  let config = {
    method: "get",
    url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${api_key}`,
    headers: {
      Content: "application/json",
    },
  };
  return axios(config);
}

export function registerUser(email, username, password) {}
