import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { DismissAlert } from './alerts/DismissAlert';
import { Alert } from '../../../packages/styled-alert-component';
import { Container } from '../../../packages/styled-container-component';
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
      <Alert primary>This is a primary alert with <a href="#">an example link</a>. Give it a click if you like.</Alert>
      <Alert secondary>This is a secondary alert with <a href="#">an example link</a>. Give it a click if you like.</Alert>
      <Alert success>This is a success alert with <a href="#">an example link</a>. Give it a click if you like.</Alert>
      <Alert danger>This is a danger alert with <a href="#">an example link</a>. Give it a click if you like.</Alert>
      <Alert warning>This is a warning alert with <a href="#">an example link</a>. Give it a click if you like.</Alert>
      <Alert info>This is a info alert with <a href="#">an example link</a>. Give it a click if you like.</Alert>
      <Alert light>This is a light alert with <a href="#">an example link</a>. Give it a click if you like.</Alert>
      <Alert dark>This is a dark alert with <a href="#">an example link</a>. Give it a click if you like.</Alert>
    </Container>
  ))))
  .add('Additional content', withReadme(AlertReadme, withDocs(AlertAdditionalContentDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <Alert success>
        <h4>
          Well done!
        </h4>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Proin malesuada ante metus,
          eu tempus erat ultricies imperdiet.
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </Alert>
    </Container>
  ))))
  .add('Dismiss alert', withReadme(AlertReadme, withDocs(AlertDismissDocs, () => (
    <DismissAlert />
  ))));
