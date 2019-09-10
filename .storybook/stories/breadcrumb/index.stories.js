import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Breadcrumb,
  BreadcrumbItem,
} from '../../../packages/styled-breadcrumb-component';
import BreadcrumbReadme from '../../../packages/styled-breadcrumb-component/README.md';

storiesOf('Breadcrumb', module)
  .addParameters({
    readme: { sidebar: BreadcrumbReadme },
  })
  .add('simple', () => (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Library
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="">Library</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Data
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  ))
  .add('pill', () => (
    <Breadcrumb pill>
      <BreadcrumbItem>
        <a href="">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        Library
      </BreadcrumbItem>
    </Breadcrumb>
  ));
