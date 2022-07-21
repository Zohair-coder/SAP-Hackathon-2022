import React from 'react';
import { Link } from 'react-router-dom';
import {
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Button,
} from '@ui5/webcomponents-react';
import { FlexBox } from '@ui5/webcomponents-react';
import './profile.css';

function ProfileView() {
  return (
    <div>
      <h1> The Missing Piece</h1>
      <FlexBox
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Start}
      >
        <div>
          <img
            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
            alt='profile'
          ></img>
          <h3>Username</h3>
          <h3>Email</h3>
        </div>
        <Link to={'/fridge'}>
          <Button>My Fridge</Button>
        </Link>
        <Link to={'/'}>
          <Button>Dietary Preferences</Button>
        </Link>
        <div>
          <h3>Favorite Recipes</h3>
          {/* Insert recipe container here */}
        </div>
      </FlexBox>
    </div>
  );
}

export default ProfileView;
