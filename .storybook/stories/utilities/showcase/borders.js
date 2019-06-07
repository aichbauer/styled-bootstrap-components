import React from 'react';
import ShowcaseContainer from './showcasecontainer';
import { Div } from '../../../../packages/styled-base-components';

const Borders = () => (
  <div>
    <ShowcaseContainer border>
      Border
    </ShowcaseContainer>

    <ShowcaseContainer borderRight borderBottom>
      Right and bottom border
    </ShowcaseContainer>

    <ShowcaseContainer border borderDanger>
      Red border
    </ShowcaseContainer>

    <ShowcaseContainer rounded>
      Rounded
    </ShowcaseContainer>

    <ShowcaseContainer roundedPill>
      Rounded pill
    </ShowcaseContainer>

    <ShowcaseContainer bgTransparent dFlex flexColumn alignItemsCenter>
      Rounded circle
      <Div style={{width: "64px", height: "64px"}} bgInfo roundedCircle></Div>
    </ShowcaseContainer>
  </div>
)

export default Borders;
