import React from 'react';
import ShowcaseContainer from './showcasecontainer';
import { Div } from '../../../../packages/styled-base-components';

const Float = () => (
  <div>
    <ShowcaseContainer>
      <Div floatLeft m1>left</Div>
      <Div clearfix></Div>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <Div floatLeft m1>left</Div>
      <Div floatLeft m1>left</Div>
      <Div floatRight m1>right</Div>
      <Div floatRight m1>right</Div>
      <Div clearfix></Div>
      <Div floatLeft m1>left</Div>
      <Div floatRight m1>right</Div>
      <Div clearfix></Div>
      <Div floatNone m1>no float</Div>
    </ShowcaseContainer>
  </div>
)

export default Float;
