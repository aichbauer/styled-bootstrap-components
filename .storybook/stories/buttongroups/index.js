import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import {
  Button,
  ButtonGroup,
  ButtonToolbar,
} from '../../../packages/styled-button-component';
import { Container } from '../../../packages/styled-container-component';
import { Row } from '../../../packages/styled-grid-system-component';

import ButtonReadme from '../../../packages/styled-button-component/README.md';

import ButtonSimpleDoc from './docs/simple.md';
import ButtonToolbarDoc from './docs/toolbar.md';
import ButtonSizingDoc from './docs/sizing.md';
import ButtonVerticalVariationDoc from './docs/vertical-variation.md';

storiesOf('Buttongroups', module)
  .add('Simple', withReadme(ButtonReadme, withDocs(ButtonSimpleDoc, () => (
    <Container style={{ textAlign: 'left' }}>
      <ButtonGroup>
        <Button secondary>Left</Button>
        <Button secondary>Middle</Button>
        <Button secondary>Right</Button>
      </ButtonGroup>
    </Container>
  ))))
  .add('Button toolbar', withReadme(ButtonReadme, withDocs(ButtonToolbarDoc, () => (
    <Container style={{ textAlign: 'left' }}>
      <ButtonToolbar>
        <ButtonGroup mr="0.5rem">
          <Button secondary>1</Button>
          <Button secondary>2</Button>
          <Button secondary>3</Button>
          <Button secondary>4</Button>
        </ButtonGroup>
        <ButtonGroup mr="0.5rem">
          <Button secondary>5</Button>
          <Button secondary>6</Button>
          <Button secondary>7</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button secondary>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Container>
  ))))
  .add('Sizing', withReadme(ButtonReadme, withDocs(ButtonSizingDoc, () => (
    <Container style={{ textAlign: 'left' }}>
      <Row>
        <ButtonGroup lg mb="0.5rem">
          <Button secondary>Left</Button>
          <Button secondary>Middle</Button>
          <Button secondary>Right</Button>
        </ButtonGroup>
      </Row>
      <Row>
        <ButtonGroup mb="0.5rem">
          <Button secondary>Left</Button>
          <Button secondary>Middle</Button>
          <Button secondary>Right</Button>
        </ButtonGroup>
      </Row>
      <Row>
        <ButtonGroup sm>
          <Button secondary>Left</Button>
          <Button secondary>Middle</Button>
          <Button secondary>Right</Button>
        </ButtonGroup>
      </Row>
    </Container>
  ))))
  .add('Vertical variation', withReadme(ButtonReadme, withDocs(ButtonVerticalVariationDoc, () => (
    <Container style={{ textAlign: 'left' }}>
      <ButtonGroup vertical>
        <Button secondary>Button</Button>
        <Button secondary>Button</Button>
        <Button secondary>Button</Button>
        <Button secondary>Button</Button>
        <Button secondary>Button</Button>
        <Button secondary>Button</Button>
      </ButtonGroup>
    </Container>
  ))));
