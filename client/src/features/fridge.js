import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@ui5/webcomponents-react';
import './fridge.css';
import {
  autocompleteIngredientSearch,
  findRecipesByIngredients,
  getRecipeInformation,
  registerUser,
  loginUser,
  getItemsFromFridge,
  addItemsToFridge,
  deleteItemFromFridge,
  getUser,
} from '../api/api';
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
  console.log(await findRecipesByIngredients(['chicken', 'onion', 'tomato']));
}

async function autocomplete_ingredients() {
  console.log(await autocompleteIngredientSearch('chicke'));
}

async function get_recipe_info() {
  console.log(await getRecipeInformation(716429));
}

async function register_user() {
  console.log(await registerUser('zohair@email.com', 'zohair', 'password'));
}

async function login_user() {
  console.log(await loginUser('zohair@email.com', 'password'));
}

async function get_items_from_fridge() {
  console.log(await getItemsFromFridge('62d9a055ccb69428780d5c7a'));
}

async function add_items_to_fridge() {
  console.log(
    await addItemsToFridge(
      '62d9a055ccb69428780d5c7a',
      'chicken',
      '716429',
      'https://spoonacular.com/recipeImages/716429-556x370.jpg'
    )
  );
}

async function delete_items_from_fridge() {
  console.log(await deleteItemFromFridge('62d9a055ccb69428780d5c7a', '716429'));
}

async function get_user() {
  console.log(await getUser('62d9a055ccb69428780d5c7a'));
}

function FridgeView() {
  // findRecipesByIngredients()
  //     .then((response) => {
  //       if (response.status >= 200 && response.status <= 299) {
  //         return response.json();
  //       }
  //       // TODO: handle error
  //       return null;
  //     })
  //     .then(
  //       (data) => {
  //         // console.log(data);
  //         setAllItems(data.recipes.data);
  //         setItems(data.recipes.data);
  //       },
  //       (error) => {
  //         console.log('Parsing Error: ');
  //         console.log(error);
  //       },
  //     )
  //     .catch((error) => {
  //       console.error('Fetch Error: ');
  //       console.log(error);
  //     });
  // }, []);
  // var recipes = findRecipesByIngredients(['chicken', 'onion', 'tomato']);
  // console.log(recipes);
  // let cards = [];
  // function setRecipes(data) {
  //   // get_information();
  //   console.log(data);
  //   for (let i in data.recipes.data) {
  //     cards.push(<p>{data.recipes.data[i].title}</p>);
  //     console.log(data.recipes.data[i].title);
  //   }
  // }
  // const fetchData = async () => {
  //   const data = {};
  //   data.recipes = await findRecipesByIngredients([
  //     'chicken',
  //     'onion',
  //     'tomato',
  //   ]);
  //   setRecipes(data);
  // };

  // fetchData();

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
      <Button onClick={get_items_from_fridge}>
        Click Me to get items from fridge
      </Button>
      <Button onClick={add_items_to_fridge}>
        Click Me to add items to fridge
      </Button>
      <Button onClick={delete_items_from_fridge}>
        Click Me to delete items from fridge
      </Button>
      <Button onClick={get_user}>Click Me to get user information</Button>
      Fridge
      <Link to={'/recipes'}>
        <Button>Generate Recipes</Button>
      </Link>
    </div>
  );
}

export default FridgeView;
