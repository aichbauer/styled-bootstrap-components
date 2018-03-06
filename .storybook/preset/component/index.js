/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { Component } from '../../../packages/styled-component';

import ComponentReadme from '../../../packages/styled-component/README.md';

import ComponentSimpleDocs from './docs/simple.md';
import ComponentAdvancedDocs from './docs/advanced.md';

storiesOf('Components', module)
  .add('Simple', withReadme(ComponentReadme, withDocs(ComponentSimpleDocs, () => (
    <div>
      <Component>Default</Component>
      <Component primary>Primary</Component>
      <Component secondary>Secondary</Component>
      <Component success>Success</Component>
      <Component danger>Danger</Component>
      <Component warning>Warning</Component>
      <Component info>Info</Component>
      <Component light>Light</Component>
      <Component dark>Dark</Component>
    </div>
  ))))
  .add('Advanced', withReadme(ComponentReadme, withDocs(ComponentAdvancedDocs, () => (
    <div>
      <Component>Default</Component>
      <Component primary>Primary</Component>
      <Component secondary>Secondary</Component>
      <Component success>Success</Component>
      <Component danger>Danger</Component>
      <Component warning>Warning</Component>
      <Component info>Info</Component>
      <Component light>Light</Component>
      <Component dark>Dark</Component>
    </div>
  ))));

