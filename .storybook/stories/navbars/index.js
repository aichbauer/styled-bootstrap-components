import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import NavReadme from '../../../packages/styled-navbar-component/README.md';

import NavSimpleDocs from './docs/light.md';
import NavHorizontalCenterDocs from './docs/dark.md';

import { NavbarLight } from './navbar/NavbarLight';
import { NavbarDark } from './navbar/NavbarDark';


storiesOf('Navbars', module)
  .add('Light', withReadme(NavReadme, withDocs(NavSimpleDocs, () => (
    <NavbarLight />
  ))))
  .add('Dark', withReadme(NavReadme, withDocs(NavHorizontalCenterDocs, () => (
    <NavbarDark />
  ))));

