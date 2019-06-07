import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import {
  Column,
  Row,
} from '../../../packages/styled-grid-system-component';
import { Container } from '../../../packages/styled-container-component';

import GridReadme from '../../../packages/styled-grid-system-component/README.md';

import GridSimpleDocs from './docs/simple.md';
import GridAdvancedDocs from './docs/advanced.md';

const ColumnStyle = {
  paddingTop: '.75rem',
  paddingBottom: '.75rem',
  backgroundColor: 'rgba(86,61,124,.15)',
  border: '1px solid rgba(86,61,124,.2)',
}

const RowStyle = {
  backgroundColor: "#ececec",
  marginBottom: "1rem",
}

storiesOf('Grid', module)
  .add('Simple', withReadme(GridReadme, withDocs(GridSimpleDocs, () => (
    <Container fluid>
      <Row style={RowStyle}>
        <Column md={6} style={ColumnStyle}>
          {'md={6}'}
        </Column>
        <Column md={6} style={ColumnStyle}>
          {'md={6}'}
        </Column>
      </Row>
      <Row style={RowStyle}>
        <Column style={ColumnStyle}>
          {'no props'}
        </Column>
        <Column style={ColumnStyle}>
          {'no props'}
        </Column>
        <Column style={ColumnStyle}>
          {'no props'}
        </Column>
      </Row>
      <Row style={RowStyle}>
        <Column sm={3} style={ColumnStyle}>
          {'sm={3}'}
        </Column>
        <Column sm={3} style={ColumnStyle}>
          {'sm={3}'}
        </Column>
        <Column sm={6} style={ColumnStyle}>
          {'sm={6}'}
        </Column>
      </Row>
    </Container>
  ))))
  .add('Advanced', withReadme(GridReadme, withDocs(GridAdvancedDocs, () => (
    <Container fluid>
      <Row style={RowStyle}>
        <Column sm={12} md={8} style={ColumnStyle}>
          {'sm={12} md={8}'}
        </Column>
        <Column md={4} sm={6} style={ColumnStyle}>
          {'sm={6} md={4}'}
        </Column>
      </Row>
      <Row style={RowStyle}>
        <Column xs={6} md={4} style={ColumnStyle}>
          {'xs={6} md={4}'}
        </Column>
        <Column xs={6} md={4} style={ColumnStyle}>
          {'xs={6} md={4}'}
        </Column>
        <Column xs={12} sm={8} md={4} style={ColumnStyle}>
          {'xs={12} sm={8} md={4}'}
        </Column>
      </Row>
      <Row style={RowStyle}>
        <Column sm={6} style={ColumnStyle}>
          {'sm={6}'}
        </Column>
        <Column sm={6} style={ColumnStyle}>
          {'sm={6}'}
        </Column>
      </Row>
      <Row style={RowStyle}>
        <Column md={6} mdOffset={6} style={ColumnStyle}>
          {'md={6} mdOffset={6}'}
        </Column>
      </Row>
      <Row style={RowStyle}>
        <Column md={6} mdOffset={6} style={ColumnStyle}>
          <Row>
            <Column md={6} style={ColumnStyle}>
              {'md={6}'}
            </Column>
            <Column md={6} style={ColumnStyle}>
              {'md={6}'}
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  ))));

