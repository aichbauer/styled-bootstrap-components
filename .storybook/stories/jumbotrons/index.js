import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { Container } from '../../../packages/styled-container-component';
import { Button } from '../../../packages/styled-button-component';
import { Jumbotron } from '../../../packages/styled-jumbotron-component';
import {
  H1,
  Hr,
  P,
} from '../../../packages/styled-base-components';

import JumbotronReadme from '../../../packages/styled-jumbotron-component/README.md';

import JumbotronSimpleDocs from './docs/simple.md';
import JumbotronFluidDocs from './docs/fluid.md';

storiesOf('Jumbotrons', module)
  .add('Simple', withReadme(JumbotronReadme, withDocs(JumbotronSimpleDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <Jumbotron>
        <H1>
          Hello, world!
        </H1>
        <P>
          This is a simple hero unit,
          a simple jumbotron-style component
          for calling extra attention to
          featured content or information.
        </P>
        <Hr />
        <P>
          It uses utility classes for
          typography and spacing to
          space content out within
          the larger container.
        </P>
        <Button primary lg>Learn more</Button>
      </Jumbotron>
    </Container>
  ))))
  .add('Fluid jumbotron', withReadme(JumbotronReadme, withDocs(JumbotronFluidDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <Jumbotron fluid>
        <H1>
        Fluid jumbotron
        </H1>
        <P>
          This is a modified jumbotron that occupies the entire horizontal space of its parent.
        </P>
      </Jumbotron>
    </Container>
  ))));
