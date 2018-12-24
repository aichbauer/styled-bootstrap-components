import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import {
  Card,
  CardBody,
  CardImageHeader,
  CardText,
  CardTitle,
} from '../../../packages/styled-card-component';
import { Container } from '../../../packages/styled-container-component';
import { Button } from '../../../packages/styled-button-component';

import CardReadme from '../../../packages/styled-card-component/README.md';

import CardSimpleDocs from './docs/simple.md';
import CardBodyDocs from './docs/body.md';
import CardTitlesTextLinksDocs from './docs/titles-text-links.md';
import CardImagesDocs from './docs/images.md';


storiesOf('Cards', module)
  .add('Simple', withReadme(CardReadme, withDocs(CardSimpleDocs, () => (
    <Container>
      <Card style={{ width: '18rem', textAlign: 'left' }}>
        <CardImageHeader src="http://via.placeholder.com/350x150" />
        <CardBody>
          <CardTitle h5>
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
    </Container>
  ))))
  .add('Card body', withReadme(CardReadme, withDocs(CardBodyDocs, () => (
    <Container>
      <Card style={{ textAlign: 'left' }}>
        <CardBody>
          This is some text within a card body.
        </CardBody>
      </Card>
    </Container>
  ))))
  .add('Titles, text, and links', withReadme(CardReadme, withDocs(CardTitlesTextLinksDocs, () => (
    <Container>
      <Card style={{ width: '18rem', textAlign: 'left' }}>
        <CardBody>
          <CardTitle h5>
            Card title
          </CardTitle>
          <CardTitle h6 muted subtitle style={{ marginBottom: '0.5rem' }}>
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
    </Container>
  ))))
  .add('Images', withReadme(CardReadme, withDocs(CardImagesDocs, () => (
    <Container>
      <Card style={{ width: '18rem', textAlign: 'left' }}>
        <CardImageHeader src="http://via.placeholder.com/350x150" />
        <CardBody>
          <CardText>
            Some quick example text to
            build on the card title and
            make up the bulk of the card&#39;s
            content.
          </CardText>
        </CardBody>
      </Card>
    </Container>
  ))));

