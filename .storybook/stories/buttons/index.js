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
    <Container style={{ textAlign: 'left' }}>
      <Button primary mr="0.5rem">Primary</Button>
      <Button secondary mr="0.5rem">Secondary</Button>
      <Button success mr="0.5rem">Success</Button>
      <Button danger mr="0.5rem">Danger</Button>
      <Button warning mr="0.5rem">Warning</Button>
      <Button info mr="0.5rem">Info</Button>
      <Button ligh mr="0.5rem"t>Light</Button>
      <Button dark mr="0.5rem">Dark</Button>
    </Container>
  ))))
  .add('Outline', withReadme(ButtonReadme, withDocs(ButtonOutlineDoc, () => (
    <Container style={{ textAlign: 'left' }}>
      <Button primary outline mr="0.5rem">Primary</Button>
      <Button secondary outline mr="0.5rem">Secondary</Button>
      <Button success outline mr="0.5rem">Success</Button>
      <Button danger outline mr="0.5rem">Danger</Button>
      <Button warning outline mr="0.5rem">Warning</Button>
      <Button info outline mr="0.5rem">Info</Button>
      <Button light outline mr="0.5rem">Light</Button>
      <Button dark outline mr="0.5rem">Dark</Button>
    </Container>
  ))))
  .add('Sizes', withReadme(ButtonReadme, withDocs(ButtonSizesDoc, () => (
    <Container style={{ textAlign: 'left' }}>
      <Row style={{ marginBottom: '0.5rem' }}>
        <Button primary lg mr="0.5rem">Large button</Button>
        <Button secondary lg mr="0.5rem">Large button</Button>
      </Row>
      <Row>
        <Button primary sm mr="0.5rem">Small button</Button>
        <Button secondary sm mr="0.5rem">Small button</Button>
      </Row>
    </Container>
  ))))
  .add('Block', withReadme(ButtonReadme, withDocs(ButtonBlockDoc, () => (
    <Container style={{ textAlign: 'left' }}>
      <Button primary block mb="0.5rem">Block level button</Button>
      <Button secondary block>Block level button</Button>
    </Container>
  ))))
  .add('Active', withReadme(ButtonReadme, withDocs(ButtonActiveDoc, () => (
    <Container style={{ textAlign: 'left' }}>
      <Button primary active mr="0.5rem">Primary button</Button>
      <Button secondary active mr="0.5rem">Secondary Button</Button>
    </Container>
  ))))
  .add('Disabled', withReadme(ButtonReadme, withDocs(ButtonDisabledDoc, () => (
    <Container style={{ textAlign: 'left' }}>
      <Button primary disabled mr="0.5rem">Primary button</Button>
      <Button secondary disabled mr="0.5rem">Secondary Button</Button>
    </Container>
  ))));
