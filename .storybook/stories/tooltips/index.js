import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import TooltipReadme from '../../../packages/styled-tooltip-component/README.md';

import TooltipSimpleDocs from './docs/simple.md';

import { SimpleTooltipToggle } from './tooltip/SimpleTooltipToggle';

storiesOf('Tooltips', module)
  .add('Simple', withReadme(TooltipReadme, withDocs(TooltipSimpleDocs, () => (
    <SimpleTooltipToggle />
  ))));

