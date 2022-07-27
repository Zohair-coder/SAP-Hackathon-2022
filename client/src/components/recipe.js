import React from 'react';
import {
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxAlignItems,
} from '@ui5/webcomponents-react';
// import { findRecipesByIngredients } from '../api/api';
// import { FlexBox } from '@ui5/webcomponents-react';

export function Recipe(name) {
  return (
    <div>
      <FlexBox
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Start}
      >
        <h4>{name}</h4>
      </FlexBox>
    </div>
  );
}
