import React from "react";
// import { useNavigate } from 'react-router-dom';
import { Input, Label } from '@ui5/webcomponents-react';
import {
  FlexBox
} from '@ui5/webcomponents-react';

function LoginView(){
    return(
        <div>
            <FlexBox>
                <Label>Username:</Label>
                <Input></Input>
            </FlexBox>
        </div>
    );
}

export default LoginView;