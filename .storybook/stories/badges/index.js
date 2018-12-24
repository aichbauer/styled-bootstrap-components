import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { Badge } from '../../../packages/styled-badge-component';
import { Button } from '../../../packages/styled-button-component';
import { Container } from '../../../packages/styled-container-component';
import BadgeReadme from '../../../packages/styled-badge-component/README.md';


import BadgeSimpleDocs from './docs/simple.md';
import BadgeButtonsDocs from './docs/buttons.md';
import BadgeContextualVariationDocs from './docs/contextual-variation.md';
import BadgePillBadgesDocs from './docs/pill-badges.md';
import BadgeLinksDocs from './docs/links.md';

storiesOf('Badges', module)
  .add('Simple', withReadme(BadgeReadme, withDocs(BadgeSimpleDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <h1>Example heading <Badge secondary>New</Badge></h1>
      <h2>Example heading <Badge secondary>New</Badge></h2>
      <h3>Example heading <Badge secondary>New</Badge></h3>
      <h4>Example heading <Badge secondary>New</Badge></h4>
      <h5>Example heading <Badge secondary>New</Badge></h5>
      <h6>Example heading <Badge secondary>New</Badge></h6>
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
        <a href="#">Primary</a>
      </Badge>
      <Badge pill secondary action m="0.5rem">
        <a href="#">Secondary</a>
      </Badge>
      <Badge pill success action m="0.5rem">
        <a href="#">Success</a>
      </Badge>
      <Badge pill danger action m="0.5rem">
        <a href="#">Danger</a>
      </Badge>
      <Badge pill warning action m="0.5rem">
        <a href="#">Warning</a>
      </Badge>
      <Badge pill info action m="0.5rem">
        <a href="#">Info</a>
      </Badge>
      <Badge pill light action m="0.5rem">
        <a href="#">Light</a>
      </Badge>
      <Badge pill dark action m="0.5rem">
        <a href="#">Dark</a>
      </Badge>
    </Container>
  ))));
