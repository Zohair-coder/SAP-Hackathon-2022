import { React } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxAlignItems,
} from '@ui5/webcomponents-react';
import './fridge.css';
// import { findRecipesByIngredients } from '../api/api';

// const [allItems, setAllItems] = React.useState < any > [];
// const [items, setItems] = React.useState < any > [];
// import { Recipe } from '../components/recipe';
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

// async function get_information() {
//   // console.log(await findRecipesByIngredients(['chicken', 'onion', 'tomato']));
//   recipes = await findRecipesByIngredients(['chicken', 'onion', 'tomato']);
// }

// let recipes = await new Promise((resolve, reject) => {
//   findRecipesByIngredients(['chicken', 'onion', 'tomato']);
// });

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
      <FlexBox
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Start}
      >
        {/* <Button onClick={get_information}>Click Me to console log info</Button>
        // {cards}
        {items.map((item, index) => {
          return()
        }} */}
        <Link to={'/recipes'}>
          <Button>Generate Recipes</Button>
        </Link>
      </FlexBox>
    </div>
  );
}

export default FridgeView;
