import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { Badge } from '../../../packages/styled-badge-component';
import { Button } from '../../../packages/styled-button-component';
import { Container } from '../../../packages/styled-container-component';
import {
  A,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from '../../../packages/styled-base-components';
import BadgeReadme from '../../../packages/styled-badge-component/README.md';


import BadgeSimpleDocs from './docs/simple.md';
import BadgeButtonsDocs from './docs/buttons.md';
import BadgeContextualVariationDocs from './docs/contextual-variation.md';
import BadgePillBadgesDocs from './docs/pill-badges.md';
import BadgeLinksDocs from './docs/links.md';

storiesOf('Badges', module)
  .add('Simple', withReadme(BadgeReadme, withDocs(BadgeSimpleDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <H1>Example heading <Badge secondary>New</Badge></H1>
      <H2>Example heading <Badge secondary>New</Badge></H2>
      <H3>Example heading <Badge secondary>New</Badge></H3>
      <H4>Example heading <Badge secondary>New</Badge></H4>
      <H5>Example heading <Badge secondary>New</Badge></H5>
      <H6>Example heading <Badge secondary>New</Badge></H6>
    </Container>
  ))))
  .add('Buttons', withReadme(BadgeReadme, withDocs(BadgeButtonsDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <Button primary>Notifications <Badge light>4</Badge></Button>
    </Container>
  ))))
  .add('Contextual variations', withReadme(BadgeReadme, withDocs(BadgeContextualVariationDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <Badge primary m="0.5rem">Primary</Badge>
      <Badge secondary m="0.5rem">Secondary</Badge>
      <Badge success m="0.5rem">Success</Badge>
      <Badge danger m="0.5rem">Danger</Badge>
      <Badge warning m="0.5rem">Warning</Badge>
      <Badge info m="0.5rem">Info</Badge>
      <Badge light m="0.5rem">Light</Badge>
      <Badge dark m="0.5rem">Dark</Badge>
    </Container>
  ))))
  .add('Pill badges', withReadme(BadgeReadme, withDocs(BadgePillBadgesDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <Badge pill primary m="0.5rem">Primary</Badge>
      <Badge pill secondary m="0.5rem">Secondary</Badge>
      <Badge pill success m="0.5rem">Success</Badge>
      <Badge pill danger m="0.5rem">Danger</Badge>
      <Badge pill warning m="0.5rem">Warning</Badge>
      <Badge pill info m="0.5rem">Info</Badge>
      <Badge pill light m="0.5rem">Light</Badge>
      <Badge pill dark m="0.5rem">Dark</Badge>
    </Container>
  ))))
  .add('Links', withReadme(BadgeReadme, withDocs(BadgeLinksDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <Badge pill primary action m="0.5rem">
        <A href="#">Primary</A>
      </Badge>
      <Badge pill secondary action m="0.5rem">
        <A href="#">Secondary</A>
      </Badge>
      <Badge pill success action m="0.5rem">
        <A href="#">Success</A>
      </Badge>
      <Badge pill danger action m="0.5rem">
        <A href="#">Danger</A>
      </Badge>
      <Badge pill warning action m="0.5rem">
        <A href="#">Warning</A>
      </Badge>
      <Badge pill info action m="0.5rem">
        <A href="#">Info</A>
      </Badge>
      <Badge pill light action m="0.5rem">
        <A href="#">Light</A>
      </Badge>
      <Badge pill dark action m="0.5rem">
        <A href="#">Dark</A>
      </Badge>
    </Container>
  ))));
