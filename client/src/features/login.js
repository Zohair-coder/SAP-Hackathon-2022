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

function LoginView() {
  return (
    <div>
      <h1>The Missing Piece</h1>
      <FlexBox
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Start}
      >
        <Label>Username:</Label>
        <Input></Input>
        <Label>Password:</Label>
        <Input></Input>
        <h3>
          Don't have an account? <a href='/register'>Sign Up</a>
        </h3>
        <Button onClick={useNavigate('/')}>Sign Up</Button>
      </FlexBox>
    </div>
  );
}

export default LoginView;
