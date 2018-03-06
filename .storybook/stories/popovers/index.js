import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import PopoverReadme from '../../../packages/styled-popover-component/README.md';

import PopoverSimpleDocs from './docs/simple.md';

import { SimplePopoverToggle } from './popover/SimplePopoverToggle';

storiesOf('Popovers', module)
  .add('Simple', withReadme(PopoverReadme, withDocs(PopoverSimpleDocs, () => (
    <SimplePopoverToggle />
  ))));

