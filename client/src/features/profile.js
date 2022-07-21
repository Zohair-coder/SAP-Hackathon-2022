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

function ProfileView() {
    return (
        <div>
            <h1> The Missing Piece</h1>
            <FlexBox
                direction={FlexBoxDirection.Column}
                justifyContent={FlexBoxJustifyContent.Center}
                alignItems={FlexBoxAlignItems.Start}
            >
               
            </FlexBox>
        </div>
    )
}

export default ProfileView;