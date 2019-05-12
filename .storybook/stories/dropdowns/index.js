import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { SimpleDropdown } from './dropdown/SimpleDropdown';
import { ContextualVariationsDropdown } from './dropdown/ContextualVariationsDropdown';
import { DropdownWithDivider } from './dropdown/DropdownWithDivider';
import { DropdownSplit } from './dropdown/DropdownSplit';
import { DropdownRight } from './dropdown/DropdownRight';
import { DropdownFill } from './dropdown/DropdownFill';

import DropdownReadme from '../../../packages/styled-dropdown-component/README.md';

import DropdownSimpleDoc from './docs/simple.md';
import DropdownContextualVariationsDoc from './docs/contextual-variations.md';
import DropdownDividerDoc from './docs/dropdown-divider.md';
import DropdownSplitDoc from './docs/dropdown-split.md';
import DropdownRightDoc from './docs/dropdown-right.md';
import DropdownFillDoc from './docs/dropdown-fill.md';

storiesOf('Dropdowns', module)
  .add('Simple', withReadme(DropdownReadme, withDocs(DropdownSimpleDoc, () => (
    <SimpleDropdown />
  ))))
  .add('Contextual variations', withReadme(DropdownReadme, withDocs(DropdownContextualVariationsDoc, () => (
    <ContextualVariationsDropdown />
  ))))
  .add('Dropdown divider', withReadme(DropdownReadme, withDocs(DropdownDividerDoc, () => (
    <DropdownWithDivider />
  ))))
  .add('Dropdown split', withReadme(DropdownReadme, withDocs(DropdownSplitDoc, () => (
    <DropdownSplit />
  ))))
  .add('Dropdown right', withReadme(DropdownReadme, withDocs(DropdownRightDoc, () => (
    <DropdownRight />
  ))))
  .add('Dropdown fill', withReadme(DropdownReadme, withDocs(DropdownFillDoc, () => (
    <DropdownFill />
  ))));
