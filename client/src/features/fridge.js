import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@ui5/webcomponents-react";
import "./fridge.css";
import {
  autocompleteIngredientSearch,
  findRecipesByIngredients,
  getRecipeInformation,
  registerUser,
  loginUser,
} from "../api/api";
// import { FlexBox } from '@ui5/webcomponents-react';

// function createFoodItem(data) {
//   let items = [];
//   for (i in data) {
//     items.push(<div>
//         <h4></h4>
//     </div>);
//   }
//   return { items };
// }

async function find_recipe() {
  console.log(await findRecipesByIngredients(["chicken", "onion", "tomato"]));
}

async function autocomplete_ingredients() {
  console.log(await autocompleteIngredientSearch("chicke"));
}

async function get_recipe_info() {
  console.log(await getRecipeInformation(716429));
}

async function register_user() {
  console.log(await registerUser("zohair@email.com", "zohair", "password"));
}

async function login_user() {
  console.log(await loginUser("zohair@email.com", "password"));
}

function FridgeView() {
  return (
    <div>
      <Button onClick={find_recipe}>Click Me to get recipe information</Button>
      <Button onClick={autocomplete_ingredients}>
        Click Me to autocomplete recipe ingredients
      </Button>
      <Button onClick={get_recipe_info}>
        Click Me to get recipe information
      </Button>
      <Button onClick={register_user}>Register User</Button>
      <Button onClick={login_user}>Login User</Button>
      Fridge
      <Link to={"/recipes"}>
        <Button>Generate Recipes</Button>
      </Link>
    </div>
  );
}

export default FridgeView;
