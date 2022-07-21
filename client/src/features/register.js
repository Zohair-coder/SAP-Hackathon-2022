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
import './login.css';

function RegisterView() {
  return (
    <div>
      <h1>The Missing Piece</h1>
      <FlexBox
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Start}
      >
        <Label>E-mail:</Label>
        <Input></Input>
        <Label>Username:</Label>
        <Input></Input>
        <Label>Password:</Label>
        <Input></Input>
        <h3>
          Already have an account? <a href='/login'>Log In</a>
        </h3>
        <Link to={'/home'}>
          <Button>Sign Up</Button>
        </Link>
      </FlexBox>
    </div>
  );
}

export default RegisterView;
