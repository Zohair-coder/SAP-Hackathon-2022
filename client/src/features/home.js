import React from 'react';
import { Link } from 'react-router-dom';
import {
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Button,
} from '@ui5/webcomponents-react';
import { FlexBox } from '@ui5/webcomponents-react';
import './home.css';

function HomeView() {
  return (
    <div>
      <h1> The Missing Piece</h1>
      <FlexBox
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Start}
      >
        <Link to={'/fridge'}>
          <Button>My Fridge</Button>
        </Link>
        <Link to={'/profile'}>
          <Button>Profile</Button>
        </Link>
      </FlexBox>
    </div>
  );
}

export default HomeView;
