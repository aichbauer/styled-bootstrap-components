import React from 'react';
import ShowcaseContainer from './showcasecontainer';
import { Div } from '../../../../packages/styled-base-components';

const Display = () => (
  <div>
    <ShowcaseContainer dNone dMdBlock>
      Hidden on small screens
    </ShowcaseContainer>

    <ShowcaseContainer dFlex justifyContentCenter flexRow>
      <Div m2 flexGrow>Flex 1 [row]</Div>
      <Div m2 flexGrow>Flex 2 [row]</Div>
      <Div m2 flexGrow>Flex 2 [row]</Div>
    </ShowcaseContainer>

    <ShowcaseContainer dFlex justifyContentCenter flexColumn>
      <Div m2 flexGrow>Flex 1 [column]</Div>
      <Div m2 flexGrow>Flex 2 [column]</Div>
      <Div m2 flexGrow>Flex 2 [column]</Div>
    </ShowcaseContainer>

    <ShowcaseContainer visible>
      Visible
    </ShowcaseContainer>

    <ShowcaseContainer invisible>
      Invisible
    </ShowcaseContainer>
  </div>
)

export default Display;
