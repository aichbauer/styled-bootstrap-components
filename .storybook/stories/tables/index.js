import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import TableReadme from '../../../packages/styled-table-component/README.md';

import TableSimpleDocs from './docs/simple.md';
import TableBorderedDocs from './docs/bordered.md';
import TableCaptionDocs from './docs/caption.md';
import TableContextualDocs from './docs/contextual.md';
import TableDarkStripedDocs from './docs/dark-striped.md';
import TableDarkDocs from './docs/dark.md';
import TableHoverableDocs from './docs/hoverable.md';
import TableHoverDarkDocs from './docs/hover-dark.md';
import TableResponsiveDocs from './docs/responsive-tables.md';
import TableResponsiveAtBreakpointsDocs from './docs/responsive-tables-at-breakpoints.md';
import TableSmallDarkDocs from './docs/small-dark.md';
import TableSmallDocs from './docs/small.md';
import TableStripedBorderedDarkDocs from './docs/striped-bordered-dark.md';
import TableStripedDocs from './docs/striped.md';
import TableHeadOptionsDocs from './docs/table-head-options.md';

import { Thead, Tbody } from './table/InnerTable';
import { TheadContextual, TbodyContextual } from './table/InnerTableContextual';
import { TheadLong, TbodyLong } from './table/InnerTableLong';

import { Container } from '../../../packages/styled-container-component';
import { Caption } from '../../../packages/styled-base-components';
import { Table } from '../../../packages/styled-table-component';

storiesOf('Table', module)
  .add('Simple', withReadme(TableReadme, withDocs(TableSimpleDocs, () => (
    <Container fluid>
      <Table>
        <Thead />
        <Tbody />
      </Table>
    </Container>
  ))))
  .add('Dark', withReadme(TableReadme, withDocs(TableDarkDocs, () => (
    <Container fluid>
      <Table tableDark>
        <Thead />
        <Tbody />
      </Table>
    </Container>
  ))))
  .add('Table Head Options', withReadme(TableReadme, withDocs(TableHeadOptionsDocs, () => (
    <Container fluid>
      <Table theadDark>
        <Thead />
        <Tbody />
      </Table>
      <Table theadLight>
        <Thead />
        <Tbody />
      </Table>
    </Container>
  ))))
  .add('Striped', withReadme(TableReadme, withDocs(TableStripedDocs, () => (
    <Container fluid>
      <Table striped>
        <Thead />
        <Tbody />
      </Table>
    </Container>
  ))))
  .add('Striped Dark', withReadme(TableReadme, withDocs(TableDarkStripedDocs, () => (
    <Container fluid>
      <Table striped tableDark>
        <Thead />
        <Tbody />
      </Table>
    </Container>
  ))))
  .add('Bordered', withReadme(TableReadme, withDocs(TableBorderedDocs, () => (
    <Container fluid>
      <Table bordered>
        <Thead />
        <Tbody />
      </Table>
    </Container>
  ))))
  .add('Striped Bordered Dark', withReadme(TableReadme, withDocs(TableStripedBorderedDarkDocs, () => (
    <Container fluid>
      <Table striped bordered tableDark>
        <Thead />
        <Tbody />
      </Table>
    </Container>
  ))))
  .add('Hoverable', withReadme(TableReadme, withDocs(TableHoverableDocs, () => (
    <Container fluid>
      <Table hover>
        <Thead />
        <Tbody />
      </Table>
    </Container>
  ))))
  .add('Hoverable Dark', withReadme(TableReadme, withDocs(TableHoverDarkDocs, () => (
    <Container fluid>
      <Table hover tableDark>
        <Thead />
        <Tbody />
      </Table>
    </Container>
  ))))
  .add('Small', withReadme(TableReadme, withDocs(TableSmallDocs, () => (
    <Container fluid>
      <Table sm>
        <Thead />
        <Tbody />
      </Table>
    </Container>
  ))))
  .add('Small Dark', withReadme(TableReadme, withDocs(TableSmallDarkDocs, () => (
    <Container fluid>
      <Table sm tableDark>
        <Thead />
        <Tbody />
      </Table>
    </Container>
  ))))
  .add('Contextual', withReadme(TableReadme, withDocs(TableContextualDocs, () => (
    <Container fluid>
      <Table>
        <TheadContextual />
        <TbodyContextual />
      </Table>
    </Container>
  ))))
  .add('Caption', withReadme(TableReadme, withDocs(TableCaptionDocs, () => (
    <Container fluid>
      <Table>
        <Caption>List of users</Caption>
        <Thead />
        <Tbody />
      </Table>
    </Container>
  ))))
  .add('Responsive tables', withReadme(TableReadme, withDocs(TableResponsiveDocs, () => (
    <Container fluid>
      <Table responsive>
        <TheadLong />
        <TbodyLong />
      </Table>
    </Container>
  ))))
  .add('Responsive tables at breakpoints', withReadme(TableReadme, withDocs(TableResponsiveAtBreakpointsDocs, () => (
    <Container fluid>
      <Table responsiveSm>
        <TheadLong />
        <TbodyLong />
      </Table>
      <Table responsiveMd>
        <TheadLong />
        <TbodyLong />
      </Table>
      <Table responsiveLg>
        <TheadLong />
        <TbodyLong />
      </Table>
      <Table responsiveXl>
        <TheadLong />
        <TbodyLong />
      </Table>
    </Container>
  ))))
