import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Breadcrumb,
  BreadcrumbItem
} from '../../../packages/styled-breadcrumb-component';

storiesOf('Breadcrumb', module)
  .add('simple', () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        Library
      </BreadcrumbItem>
    </Breadcrumb>
  ))
  .add('as pill', () => (
    <Breadcrumb pill>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        Library
      </BreadcrumbItem>
    </Breadcrumb>
  ));