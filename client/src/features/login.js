import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={'/home'}>
          <Button>Sign Up</Button>
        </Link>
      </FlexBox>
    </div>
  );
}

export default LoginView;
