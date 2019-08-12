import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../../../packages/styled-container-component';


storiesOf('Container', module)
  .add('simple', () => (
    <Container p4 bgPrimary>Simple container</Container>
  ))
  .add('fluid', () => (
    <Container p4 bgPrimary>Fluid container</Container>
  ));