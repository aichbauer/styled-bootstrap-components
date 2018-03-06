import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { DismissAlert } from './alerts/DismissAlert';
import { Alert } from '../../../packages/styled-alert-component/src';
import { Container } from '../../../packages/styled-container-component/src';
import {
  A,
  Hr,
  H4,
  P,
} from '../../../packages/styled-base-components/src';
import AlertReadme from '../../../packages/styled-alert-component/README.md';

import AlertSimpleDocs from './docs/simple.md';
import AlertLinkColorDocs from './docs/link-color.md';
import AlertAdditionalContentDocs from './docs/additional-content.md';
import AlertDismissDocs from './docs/dismiss.md';

storiesOf('Alerts', module)
  .add('Simple', withReadme(AlertReadme, withDocs(AlertSimpleDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <Alert primary>This is a primary alert — check it out!</Alert>
      <Alert secondary>This is a secondary alert — check it out!</Alert>
      <Alert success>This is a success alert — check it out!</Alert>
      <Alert danger>This is a danger alert — check it out!</Alert>
      <Alert warning>This is a warning alert — check it out!</Alert>
      <Alert info>This is a info alert — check it out!</Alert>
      <Alert light>This is a light alert — check it out!</Alert>
      <Alert dark>This is a dark alert — check it out!</Alert>
    </Container>
  ))))
  .add('Link color', withReadme(AlertReadme, withDocs(AlertLinkColorDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <Alert primary>This is a primary alert with <A href="#">an example link</A >. Give it a click if you like.</Alert>
      <Alert secondary>This is a secondary alert with <A href="#">an example link</A >. Give it a click if you like.</Alert>
      <Alert success>This is a success alert with <A href="#">an example link</A >. Give it a click if you like.</Alert>
      <Alert danger>This is a danger alert with <A href="#">an example link</A >. Give it a click if you like.</Alert>
      <Alert warning>This is a warning alert with <A href="#">an example link</A >. Give it a click if you like.</Alert>
      <Alert info>This is a info alert with <A href="#">an example link</A >. Give it a click if you like.</Alert>
      <Alert light>This is a light alert with <A href="#">an example link</A >. Give it a click if you like.</Alert>
      <Alert dark>This is a dark alert with <A href="#">an example link</A >. Give it a click if you like.</Alert>
    </Container>
  ))))
  .add('Additional content', withReadme(AlertReadme, withDocs(AlertAdditionalContentDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <Alert success>
        <H4>
          Well done!
        </H4>
        <P>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Proin malesuada ante metus,
          eu tempus erat ultricies imperdiet.
        </P>
        <Hr />
        <P>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </P>
      </Alert>
    </Container>
  ))))
  .add('Dismiss alert', withReadme(AlertReadme, withDocs(AlertDismissDocs, () => (
    <DismissAlert />
  ))));
