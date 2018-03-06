import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { Container } from '../../../packages/styled-container-component';

import ContainerReadme from '../../../packages/styled-container-component/README.md';

import ConatinerSimpleDocs from './docs/simple.md';


storiesOf('Container', module)
  .add('Simple', withReadme(ContainerReadme, withDocs(ConatinerSimpleDocs, () => (
    <Container fluid>
      <Container style={{ backgroundColor: '#007bff', color: 'white', marginBottom: '15px' }}>
        Container
      </Container>
      <Container fluid style={{ backgroundColor: '#6c757d', color: 'white' }}>
        Fluid Container
      </Container>
    </Container>
  ))));

