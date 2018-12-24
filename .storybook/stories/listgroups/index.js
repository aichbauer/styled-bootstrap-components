import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { Container } from '../../../packages/styled-container-component';
import { Badge } from '../../../packages/styled-badge-component';
import {
  ListGroup,
  ListGroupItem,
} from '../../../packages/styled-listgroup-component';

import ListGroupReadme from '../../../packages/styled-listgroup-component/README.md';

import ListGroupSimpleDocs from './docs/simple.md';
import ListGroupActiveDocs from './docs/active.md';
import ListGroupDisabledDocs from './docs/disabled.md';
import ListGroupLinksDocs from './docs/links.md';
import ListGroupFlushDocs from './docs/flush.md';
import ListGroupContextualDocs from './docs/contextual.md';
import ListGroupContextualLinksDocs from './docs/contextual-links.md';
import ListGroupBadgesDocs from './docs/badges.md';

storiesOf('Listgroup', module)
  .add('Simple', withReadme(ListGroupReadme, withDocs(ListGroupSimpleDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </Container>
  ))))
  .add('Active items', withReadme(ListGroupReadme, withDocs(ListGroupActiveDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <ListGroup>
        <ListGroupItem active>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </Container>
  ))))
  .add('Disabled items', withReadme(ListGroupReadme, withDocs(ListGroupDisabledDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <ListGroup>
        <ListGroupItem disabled>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </Container>
  ))))
  .add('Links', withReadme(ListGroupReadme, withDocs(ListGroupLinksDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <ListGroup>
        <ListGroupItem active action><a href="#">Cras justo odio</a></ListGroupItem>
        <ListGroupItem action><a href="#">Dapibus ac facilisis in</a></ListGroupItem>
        <ListGroupItem action><a href="#">Morbi leo risus</a></ListGroupItem>
        <ListGroupItem action><a href="#">Porta ac consectetur ac</a></ListGroupItem>
        <ListGroupItem disabled action><a href="#">Vestibulum at eros</a></ListGroupItem>
      </ListGroup>
    </Container>
  ))))
  .add('Flush', withReadme(ListGroupReadme, withDocs(ListGroupFlushDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <ListGroup flush>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </Container>
  ))))
  .add('Contextual', withReadme(ListGroupReadme, withDocs(ListGroupContextualDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem primary>This is a primary list group item</ListGroupItem>
        <ListGroupItem secondary>This is a secondary list group item</ListGroupItem>
        <ListGroupItem success>This is a success list group item</ListGroupItem>
        <ListGroupItem danger>This is a danger list group item</ListGroupItem>
        <ListGroupItem warning>This is a warning list group item</ListGroupItem>
        <ListGroupItem info>This is a info list group item</ListGroupItem>
        <ListGroupItem light>This is a light list group item</ListGroupItem>
        <ListGroupItem dark>This is a dark list group item</ListGroupItem>
      </ListGroup>
    </Container>
  ))))
  .add('Contextual Links', withReadme(ListGroupReadme, withDocs(ListGroupContextualLinksDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <ListGroup>
        <ListGroupItem action>Cras justo odio</ListGroupItem>
        <ListGroupItem primary action>This is a primary list group item</ListGroupItem>
        <ListGroupItem secondary action>This is a secondary list group item</ListGroupItem>
        <ListGroupItem success action>This is a success list group item</ListGroupItem>
        <ListGroupItem danger action>This is a danger list group item</ListGroupItem>
        <ListGroupItem warning action>This is a warning list group item</ListGroupItem>
        <ListGroupItem info action>This is a info list group item</ListGroupItem>
        <ListGroupItem light action>This is a light list group item</ListGroupItem>
        <ListGroupItem dark action>This is a dark list group item</ListGroupItem>
      </ListGroup>
    </Container>
  ))))
  .add('With badges', withReadme(ListGroupReadme, withDocs(ListGroupBadgesDocs, () => (
    <Container style={{ textAlign: 'left' }}>
      <ListGroup>
        <ListGroupItem>Cras justo odio <Badge pill primary>14</Badge></ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in <Badge pill primary>2</Badge></ListGroupItem>
        <ListGroupItem>Morbi leo risus <Badge pill primary>1</Badge></ListGroupItem>
      </ListGroup>
    </Container>
  ))));

