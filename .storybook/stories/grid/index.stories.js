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
      <Column md={2} bgLight p2>
        {'md={2}'}
      </Column>
      <Column md={2} bgPrimary p2>
        {'md={2}'}
      </Column>
      <Column md={8} bgLight p2>
        {'md={8}'}
      </Column>
    </Row>
  ))
  .add('without props', () => (
    <Row bgDarker p2>
      <Column bgLight p2>
        {'no props'}
      </Column>
      <Column bgPrimary p2>
        {'no props'}
      </Column>
      <Column bgLight p2>
        {'no props'}
      </Column>
    </Row>
  ))
  .add('with multiple breakpoints', () => (
    <Row bgDarker p2>
      <Column xs={12} sm={8} md={6} lg={4} xl={1} bgLight p2>
        {'xs={12} md={8} sm={6} lg={4} xl={2}'}
      </Column>
    </Row>
  ))
  .add('offset', () => (
    <Row bgDarker p2>
      <Column md={6} mdOffset={6} bgLight p2>
        Offsetted column (only on md)
      </Column>
    </Row>
  ))
  .add('inner', () => (
    <Row bgDarker p2>
      <Column md={6} bgDark p2>
        <Row bgLight>
          <Column md={6} bgLight p2>
            {'md={6}'}
          </Column>
          <Column md={6} bgPrimary p2>
            {'md={6}'}
          </Column>
        </Row>
      </Column>
    </Row>
  ));
