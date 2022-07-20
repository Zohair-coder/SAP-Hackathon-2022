import React from 'react';
// import { useNavigate } from 'react-router-dom';
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
          Don't have an account?{' '}
          <a href='https://github.com/Zohair-coder/SAP-Hackathon-2022'>
            Sign Up
          </a>
        </h3>
        <Button>Log In</Button>
      </FlexBox>
    </div>
  );
}

export default LoginView;
