import React from 'react';
import { Tr } from '../../../../packages/styled-table-component';

export const TheadContextual = () => (
  <thead>
    <tr>
      <th scope="col">Class</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
);

export const TbodyContextual = () => (
  <tbody>
    <Tr active>
      <td>Active</td>
      <td>Cell</td>
      <td>Cell</td>
    </Tr>
    <Tr>
      <td>Default</td>
      <td>Cell</td>
      <td>Cell</td>
    </Tr>
    <Tr primary>
      <td>Primary</td>
      <td>Cell</td>
      <td>Cell</td>
    </Tr>
    <Tr secondary>
      <td>Secondary</td>
      <td>Cell</td>
      <td>Cell</td>
    </Tr>
    <Tr success>
      <td>Success</td>
      <td>Cell</td>
      <td>Cell</td>
    </Tr>
    <Tr danger>
      <td>Danger</td>
      <td>Cell</td>
      <td>Cell</td>
    </Tr>
    <Tr warning>
      <td>Warning</td>
      <td>Cell</td>
      <td>Cell</td>
    </Tr>
    <Tr info>
      <td>Info</td>
      <td>Cell</td>
      <td>Cell</td>
    </Tr>
    <Tr light>
      <td>Light</td>
      <td>Cell</td>
      <td>Cell</td>
    </Tr>
    <Tr dark>
      <td>Dark</td>
      <td>Cell</td>
      <td>Cell</td>
    </Tr>
  </tbody>
);
