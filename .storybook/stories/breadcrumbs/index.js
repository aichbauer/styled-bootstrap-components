import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { Container } from '../../../packages/styled-container-component';
import {
  Breadcrumb,
  BreadcrumbItem,
} from '../../../packages/styled-breadcrumb-component';

import BreadcrumbReadme from '../../../packages/styled-breadcrumb-component/README.md';

import BreadcrumbSimpleDocs from './docs/simple.md';

storiesOf('Breadcrumbs', module)
  .add('Simple', withReadme(BreadcrumbReadme, withDocs(BreadcrumbSimpleDocs, () => (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem active>
          Home
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Library
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">Library</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Data
        </BreadcrumbItem>
      </Breadcrumb>
    </Container>
  ))));

