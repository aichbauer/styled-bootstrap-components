import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../utils';
import {
  Card,
  CardBody,
  CardImageHeader,
  CardText,
  CardTitle,
} from '../../../packages/styled-card-component';
import { Button } from '../../../packages/styled-button-component';

storiesOf('Card', module)
  .add('simple', () => (
    <Card style={{width: '18rem'}}>
      <CardImageHeader src="http://via.placeholder.com/350x150" />
      <CardBody>
        <CardTitle h3>
          Card title
        </CardTitle>
        <CardText>
          Some quick example text to
          build on the card title and
          make up the bulk of the card&#39;s
          content.
        </CardText>
        <Button primary>Go somewhere</Button>
      </CardBody>
    </Card>
  ))
  .add('with plain body', () => (
    <Card>
      <CardBody>
        This is some text within a card body.
      </CardBody>
    </Card>
  ))
  .add('with plain body', () => (
    <Card>
      <CardBody>
        This is some text within a card body.
      </CardBody>
    </Card>
  ))
  .add('with multiple titles', () => (
    <Card style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle h3>
          Card title
        </CardTitle>
        <CardText>
          Some quick example text to
          build on the card title and
          make up the bulk of the card&#39;s
          content.
        </CardText>
      </CardBody>
    </Card>
  ))
  .add('with links', () => (
    <Card style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle h3>
          Card title
        </CardTitle>
        <CardTitle h4 muted subtitle style={{marginBottom: '0.5rem'}}>
          Card subtitle
        </CardTitle>
        <CardText>
          Some quick example text to
          build on the card title and
          make up the bulk of the card&#39;s
          content.
        </CardText>
        <a href="#">Card Link</a>
        <a href="#">Another link</a>
      </CardBody>
    </Card>
  ));