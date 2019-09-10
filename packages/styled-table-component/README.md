# styled-table-component

[![npm](https://img.shields.io/npm/v/styled-table-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-table-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) table component made with [styled-components](https://styled-components.com).

This is a modular approach to use [bootstrap](https://getbootstrap.com)
components for quick prototypes, as an entrypoint of your own component
library, or if you need just one bootstrap component for your application.

## Installation

```sh
npm install --save styled-table-component
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

```jsx
import React from 'react';
import { Table, Tr } from 'styled-table-component';

const MyTable = (props) => (
  <Table>
    <thead>
      <tr>
        <th scope="col">Color</th>
        <th scope="col">Content</th>
      </tr>
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
);
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `tableDark` only on Table **Type**: boolean
* `theadDark` only on Table **Type**: boolean
* `theadLight` only on Table **Type**: boolean
* `striped` only on Table **Type**: boolean
* `bordered` only on Table **Type**: boolean
* `sm` only on Table **Type**: boolean
* `responsive` only on Table **Type**: boolean
* `responsiveSm` only on Table **Type**: boolean
* `responsiveMd` only on Table **Type**: boolean
* `responsiveLg` only on Table **Type**: boolean
* `responsiveXl` only on Table **Type**: boolean
* `hover` **Type**: boolean
* `primary` only on Tr **Type**: boolean
* `secondary` only on Tr **Type**: boolean
* `success` only on Tr **Type**: boolean
* `info` only on Tr **Type**: boolean
* `danger` only on Tr **Type**: boolean
* `warning` only on Tr **Type**: boolean
* `light` only on Tr **Type**: boolean
* `dark` only on Tr **Type**: boolean
* `active` only on Tr **Type**: boolean

## License

MIT © Lukas Aichbauer
