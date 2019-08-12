import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table, Tr } from '../../../packages/styled-table-component';
import TableReadme from '../../../packages/styled-table-component/README.md';

export const Thead = () => (
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
);

export const Tbody = () => (
  <tbody>
    <tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
    <tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr>
    <tr><th scope="row">3</th><td>Larry</td><td>the Bird</td><td>@twitter</td></tr>
  </tbody>
);

storiesOf('Table', module)
  .addParameters({
    readme: { sidebar: TableReadme },
  })
  .add('simple', () => (
    <Table>
      <Thead />
      <Tbody />
    </Table>
  ))
  .add('dark', () => (
    <Table tableDark>
      <Thead />
      <Tbody />
    </Table>
  ))
  .add('dark thead', () => (
    <Table theadDark>
      <Thead />
      <Tbody />
    </Table>
  ))
  .add('light thead', () => (
    <Table theadLight>
      <Thead />
      <Tbody />
    </Table>
  ))
  .add('stripped', () => (
    <Table striped>
      <Thead />
      <Tbody />
    </Table>
  ))
  .add('stripped dark', () => (
    <Table striped tableDark>
      <Thead />
      <Tbody />
    </Table>
  ))
  .add('bordered', () => (
    <Table bordered>
      <Thead />
      <Tbody />
    </Table>
  ))
  .add('hoverable', () => (
    <Table hover>
      <Thead />
      <Tbody />
    </Table>
  ))
  .add('hoverable dark', () => (
    <Table hover tableDark>
      <Thead />
      <Tbody />
    </Table>
  ))
  .add('small', () => (
    <Table sm>
      <Thead />
      <Tbody />
    </Table>
  ))
  .add('small dark', () => (
    <Table sm tableDark>
      <Thead />
      <Tbody />
    </Table>
  ))
  .add('contextual', () => (
    <Table>
      <thead>
        <tr><th scope="col">Color</th><th scope="col">Content</th></tr>
      </thead>
      <tbody>
        <Tr active><td>Active</td><td>Content</td></Tr>
        <Tr primary><td>Primary</td><td>Content</td></Tr>
        <Tr secondary><td>Secondary</td><td>Content</td></Tr>
        <Tr success><td>Success</td><td>Content</td></Tr>
        <Tr danger><td>Danger</td><td>Content</td></Tr>
        <Tr warning><td>Warning</td><td>Content</td></Tr>
        <Tr info><td>Info</td><td>Content</td></Tr>
        <Tr light><td>Light</td><td>Content</td></Tr>
        <Tr dark><td>Dark</td><td>Content</td></Tr>
      </tbody>
    </Table>
  ))
  .add('caption', () => (
    <Table>
      <caption>List of users</caption>
      <Thead />
      <Tbody />
    </Table>
  ))
  .add('responsive', () => (
    <Table responsive>
      <Thead />
      <Tbody />
    </Table>
  ))
  .add('responsive at breakpoints', () => (
    <Table responsiveMd>
      <Thead />
      <Tbody />
    </Table>
  ));
