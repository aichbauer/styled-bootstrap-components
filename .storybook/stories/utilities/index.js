import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import BaseReadme from '../../../packages/styled-base-components/README.md';

import ShowcaseContainerDocs from './docs/showcasecontainer.md';
import ShowcaseContainer from './showcase/showcasecontainer';
import ColorsDocs from './docs/colors.md';
import Colors from './showcase/colors';
import SpacingDocs from './docs/spacing.md';
import Spacing from './showcase/spacing';
import TextDocs from './docs/text.md';
import Text from './showcase/text';
import SizingDocs from './docs/sizing.md';
import Sizing from './showcase/sizing';
import DisplayDocs from './docs/display.md';
import Display from './showcase/display';
import BordersDocs from './docs/borders.md';
import Borders from './showcase/borders';
import ShadowsDocs from './docs/shadows.md';
import Shadows from './showcase/shadows';
import FloatDocs from './docs/float.md';
import Float from './showcase/float';
import ResizeDocs from './docs/resize.md';
import Resize from './showcase/resize';

storiesOf('Utilities', module)
  .add('ShowcaseContainer', withReadme(BaseReadme, withDocs(ShowcaseContainerDocs, () => (
    <ShowcaseContainer>
      Just container with utilities
    </ShowcaseContainer>
   ))))
  .add('Colors', withReadme(BaseReadme, withDocs(ColorsDocs, Colors)))
  .add('Spacing', withReadme(BaseReadme, withDocs(SpacingDocs, Spacing)))
  .add('Text', withReadme(BaseReadme, withDocs(TextDocs, Text)))
  .add('Sizing', withReadme(BaseReadme, withDocs(SizingDocs, Sizing)))
  .add('Display', withReadme(BaseReadme, withDocs(DisplayDocs, Display)))
  .add('Borders', withReadme(BaseReadme, withDocs(BordersDocs, Borders)))
  .add('Shadows', withReadme(BaseReadme, withDocs(ShadowsDocs, Shadows)))
  .add('Float', withReadme(BaseReadme, withDocs(FloatDocs, Float)))
  .add('Resize', withReadme(BaseReadme, withDocs(ResizeDocs, Resize)));

