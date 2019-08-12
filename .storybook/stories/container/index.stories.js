import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../../../packages/styled-container-component';
import ContainerReadme from '../../../packages/styled-container-component/README.md';

storiesOf('Container', module)
  .addParameters({
    readme: { sidebar: ContainerReadme },
  })
  .add('simple', () => (
    <Container p4 bgPrimary>Simple container</Container>
  ))
  .add('fluid', () => (
    <Container p4 bgPrimary>Fluid container</Container>
  ));
