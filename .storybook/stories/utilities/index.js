import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import BaseReadme from '../../../packages/styled-base-components/README.md';

import ShowcaseDocs from './docs/showcase.md';
import Showcase from './showcase';


storiesOf('Utilities', module)
  .add('Showcase', withReadme(BaseReadme, withDocs(ShowcaseDocs, Showcase)));

