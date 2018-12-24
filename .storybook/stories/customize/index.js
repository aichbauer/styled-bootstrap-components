import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import ButtonReadme from '../../../packages/styled-button-component/README.md';

import ButtonSimpleDocs from './docs/simple.md';

import { Simple } from './button/Simple';

import { Container } from '../../../packages/styled-container-component';


storiesOf('Customize', module)
  .add('Simple', withReadme(ButtonReadme, withDocs(ButtonSimpleDocs, () => (
    <Container fluid>
      <Simple />
    </Container>
  ))))
  .add('Complex', () => (
    <Container fluid style={{ textAlign: 'center' }}>
      <br />
      How to create your own component library with `styled-components` ThemeProvider.
      <br />
      <br />
      COMING SOON...
    </Container>
  ));

