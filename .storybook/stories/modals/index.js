import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { ClickableModal } from './modal/ClickableModal';

import ModalReadme from '../../../packages/styled-modal-component/README.md';

import ModalSimpleDocs from './docs/simple.md';


storiesOf('Modals', module)
  .add('Simple', withReadme(ModalReadme, withDocs(ModalSimpleDocs, () => (
    <div>
      <ClickableModal />
    </div>
  ))));

