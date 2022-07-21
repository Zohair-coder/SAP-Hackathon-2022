import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@ui5/webcomponents-react';
import './fridge.css';
import { findRecipesByIngredients } from '../api/api';
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

async function get_information() {
  console.log(await findRecipesByIngredients(['chicken', 'onion', 'tomato']));
}

function FridgeView() {
  return (
    <div>
      <Button onClick={get_information}>Click Me to console log info</Button>
      Fridge
      <Link to={'/recipes'}>
        <Button>Generate Recipes</Button>
      </Link>
    </div>
  );
}

export default FridgeView;
