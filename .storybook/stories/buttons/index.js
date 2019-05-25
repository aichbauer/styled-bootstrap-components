import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { Button } from '../../../packages/styled-button-component';
import { Container } from '../../../packages/styled-container-component';
import { Row } from '../../../packages/styled-grid-system-component';

import ButtonReadme from '../../../packages/styled-button-component/README.md';

import ButtonSimpleDoc from './docs/simple.md';
import ButtonOutlineDoc from './docs/outline.md';
import ButtonSizesDoc from './docs/sizes.md';
import ButtonBlockDoc from './docs/block.md';
import ButtonActiveDoc from './docs/active.md';
import ButtonDisabledDoc from './docs/disabled.md';

storiesOf('Buttons', module)
  .add('Simple', withReadme(ButtonReadme, withDocs(ButtonSimpleDoc, () => (
    <Container>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button success>Success</Button>
      <Button danger>Danger</Button>
      <Button warning>Warning</Button>
      <Button info>Info</Button>
      <Button light>Light</Button>
      <Button dark>Dark</Button>
    </Container>
  ))))
  .add('Outline', withReadme(ButtonReadme, withDocs(ButtonOutlineDoc, () => (
    <Container>
      <Button primary outline>Primary</Button>
      <Button secondary outline>Secondary</Button>
      <Button success outline>Success</Button>
      <Button danger outline>Danger</Button>
      <Button warning outline>Warning</Button>
      <Button info outline>Info</Button>
      <Button light outline>Light</Button>
      <Button dark outline>Dark</Button>
    </Container>
  ))))
  .add('Sizes', withReadme(ButtonReadme, withDocs(ButtonSizesDoc, () => (
    <Container>
      <Row style={{ marginBottom: '0.5rem' }}>
        <Button primary lg>Large button</Button>
        <Button secondary lg>Large button</Button>
      </Row>
      <Row>
        <Button primary sm>Small button</Button>
        <Button secondary sm>Small button</Button>
      </Row>
    </Container>
  ))))
  .add('Block', withReadme(ButtonReadme, withDocs(ButtonBlockDoc, () => (
    <Container>
      <Button primary block mb="0.5rem">Block level button</Button>
      <Button secondary block>Block level button</Button>
    </Container>
  ))))
  .add('Active', withReadme(ButtonReadme, withDocs(ButtonActiveDoc, () => (
    <Container>
      <Button primary active>Primary button</Button>
      <Button secondary active>Secondary Button</Button>
    </Container>
  ))))
  .add('Disabled', withReadme(ButtonReadme, withDocs(ButtonDisabledDoc, () => (
    <Container>
      <Button primary disabled>Primary button</Button>
      <Button secondary disabled>Secondary Button</Button>
    </Container>
  ))));
