import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { ModalExample } from './modal/ModalExample';
import { ModalShowcase } from './modal/ModalShowcase';

import ModalReadme from '../../../packages/styled-modal-component/README.md';

import ModalSimpleDocs from './docs/simple.md';
import ModalAdvancedDocs from './docs/advanced.md';


storiesOf('Modals', module)
  .add('Simple', withReadme(ModalReadme, withDocs(ModalSimpleDocs, () => (
    <ModalExample />
  ))))
  .add('Advanced', withReadme(ModalReadme, withDocs(ModalAdvancedDocs, () => (
    <ModalShowcase />
  ))));

