import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import PopoverReadme from '../../../packages/styled-popover-component/README.md';

import PopoverSimpleDocs from './docs/simple.md';
import DismissivePopoverDocs from './docs/dismissive.md';

import { SimplePopoverToggle } from './popover/SimplePopoverToggle';
import { DismissivePopover } from './popover/DismissivePopover';

storiesOf('Popovers', module)
  .add('Simple', withReadme(PopoverReadme, withDocs(PopoverSimpleDocs, () => (
    <SimplePopoverToggle />
  ))))
  .add('Dismissive', withReadme(PopoverReadme, withDocs(DismissivePopoverDocs, () => (
    <DismissivePopover />
  ))));
