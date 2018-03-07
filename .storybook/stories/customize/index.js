import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import ButtonReadme from '../../../packages/styled-button-component/README.md';

import ButtonSimpleDocs from './docs/simple.md';
import ButtonComplexDocs from './docs/complex.md';

import { Simple } from './button/Simple';
import { Complex } from './button/Complex';

import { Container } from '../../../packages/styled-container-component';


storiesOf('Customize', module)
  .add('Simple', withReadme(ButtonReadme, withDocs(ButtonSimpleDocs, () => (
    <Container fluid>
      <Simple primary mr="0.5rem">Hello, World!</Simple>
      <Simple secondary mr="0.5rem">Hello, World!</Simple>
    </Container>
  ))))
  .add('Complex', withReadme(ButtonReadme, withDocs(ButtonComplexDocs, () => (
    <Container fluid>
      <Complex primary mr="0.5rem">Hello, World!</Complex>
      <Complex mr="0.5rem">Hello, World!</Complex>
    </Container>
  ))));

