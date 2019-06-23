import React from 'react';
import ShowcaseContainer from './showcasecontainer';
import { Div } from '../../../../packages/styled-base-components';

const Sizing = () => (
  <div>
    <ShowcaseContainer>
      <Div mb2 bgInfo w100>100%</Div>
      <Div mb2 bgInfo w75>75%</Div>
      <Div mb2 bgInfo w50>50%</Div>
      <Div bgInfo w25>25%</Div>
    </ShowcaseContainer>

    <ShowcaseContainer dFlex style={{height: "64px"}}>
      <Div mr2 bgInfo h100 flexGrow>100%</Div>
      <Div mr2 bgInfo h75 flexGrow>75%</Div>
      <Div mr2 bgInfo h50 flexGrow>50%</Div>
      <Div bgInfo h25 flexGrow>25%</Div>
    </ShowcaseContainer>

    <ShowcaseContainer w100 wMd50>
      100% only on xs and sm
    </ShowcaseContainer>
  </div>
)

export default Sizing;
