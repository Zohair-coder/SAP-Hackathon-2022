import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Input,
  Label,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Button,
} from '@ui5/webcomponents-react';
import { FlexBox } from '@ui5/webcomponents-react';

function HomeView() {
    return (
        <div>
            <h1> The Missing Piece</h1>
            <FlexBox
                direction={FlexBoxDirection.Column}
                justifyContent={FlexBoxJustifyContent.Center}
                alignItems={FlexBoxAlignItems.Start}
            >
                <Button>My Fridge</Button>
                <Button>Find a Recipe</Button>
                <Button onClick={useNavigate('/')}>My Profile</Button>

            </FlexBox>
        </div>
    )
}

export default HomeView;