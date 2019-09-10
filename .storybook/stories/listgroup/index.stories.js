import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge } from '../../../packages/styled-badge-component';
import {
  ListGroup,
  ListGroupItem,
} from '../../../packages/styled-listgroup-component';
import ListGroupReadme from '../../../packages/styled-listgroup-component/README.md';

storiesOf('ListGroup', module)
  .addParameters({
    readme: { sidebar: ListGroupReadme },
  })
  .add('simple', () => (
    <ListGroup>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    </ListGroup>
  ))
  .add('active items', () => (
    <ListGroup>
      <ListGroupItem active>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    </ListGroup>
  ))
  .add('disabled items', () => (
    <ListGroup>
      <ListGroupItem disabled>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    </ListGroup>
  ))
  .add('links', () => (
    <ListGroup>
      <ListGroupItem action active><a href="">Cras justo odio</a></ListGroupItem>
      <ListGroupItem action><a href="">Dapibus ac facilisis in</a></ListGroupItem>
      <ListGroupItem action><a href="">Morbi leo risus</a></ListGroupItem>
      <ListGroupItem action disabled><a href="">Porta ac consectetur ac</a></ListGroupItem>
    </ListGroup>
  ))
  .add('flush', () => (
    <ListGroup flush>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    </ListGroup>
  ))
  .add('contextual', () => (
    <ListGroup flush>
      <ListGroupItem primary>This is a primary list group item</ListGroupItem>
      <ListGroupItem secondary>This is a secondary list group item</ListGroupItem>
      <ListGroupItem success>This is a success list group item</ListGroupItem>
      <ListGroupItem danger>This is a danger list group item</ListGroupItem>
      <ListGroupItem warning>This is a warning list group item</ListGroupItem>
      <ListGroupItem info>This is a info list group item</ListGroupItem>
      <ListGroupItem light>This is a light list group item</ListGroupItem>
      <ListGroupItem dark>This is a dark list group item</ListGroupItem>
    </ListGroup>
  ))
  .add('with badges', () => (
    <ListGroup>
      <ListGroupItem>Cras justo odio <Badge pill primary>14</Badge></ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in <Badge pill primary>2</Badge></ListGroupItem>
      <ListGroupItem>Morbi leo risus <Badge pill primary>1</Badge></ListGroupItem>
    </ListGroup>
  ));
