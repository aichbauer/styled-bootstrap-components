import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Column,
  Row,
} from '../../../packages/styled-grid-system-component';
import GridReadme from '../../../packages/styled-grid-system-component/README.md';

storiesOf('Grid', module)
  .addParameters({
    readme: { sidebar: GridReadme },
  })
  .add('simple', () => (
    <Row bgDarker p2>
      <Column md={3} bgSecondary>
        {'md={3}'}
      </Column>
      <Column md={3} bgPrimary>
        {'md={3}'}
      </Column>
      <Column md={6} bgSecondary>
        {'md={6}'}
      </Column>
    </Row>
  ))
  .add('without props', () => (
    <Row bgDarker p2>
      <Column bgSecondary>
        {'no props'}
      </Column>
      <Column bgPrimary>
        {'no props'}
      </Column>
      <Column bgSecondary>
        {'no props'}
      </Column>
    </Row>
  ))
  .add('with multiple breakpoints', () => (
    <Row bgDarker p2>
      <Column sm={12} md={8} bgSecondary>
        {'sm={12} md={8}'}
      </Column>
      <Column xs={8} md={4} sm={6} lg={12} bgPrimary>
        {'xs={6} md={4} sm={6} lg={12}'}
      </Column>
    </Row>
  ))
  .add('inner', () => (
    <Row bgDarker p2>
      <Column md={6} mdOffset={6} bgLight p2>
        <Row bgLight>
          <Column md={6} bgPrimary>
            {'md={6}'}
          </Column>
          <Column md={6} bgSecondary>
            {'md={6}'}
          </Column>
        </Row>
      </Column>
    </Row>
  ));
