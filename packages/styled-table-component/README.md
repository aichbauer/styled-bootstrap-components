# styled-table-component

[![npm](https://img.shields.io/npm/v/styled-table-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-table-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) table component made with [styled-components](https://styled-components.com).

## Table of Contents

* [Documentation](https://aichbauer.github.io/styled-bootstrap-components)
* [Why?](#why)
* [Installation](#installation)
* [Usage](#usage)
* [Properties](#properties)
* [Related](#related)
* [License](#license)

## Why?

This is a modular approach to use [bootstrap](https://getbootstrap.com) components for quick prototypes, as an entrypoint of your own component library, or if you need just one [bootstrap](https://getbootstrap.com) component for your application. To work with ease with any other libary or framework this component is built with [styled-components](https://styled-components.com).

## Installation

> Note: this component has a peer dependency on `styled-components` and `styled-system`. To use this component you also need to `npm i styled-components styled-system -S`.

```sh
$ npm i styled-table-component -S
```

or

```sh
$ yarn add styled-table-component
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

```jsx
/*
  if you installed `styled-bootstrap-components` use

    import { ... } from 'styled-bootstrap-components'

  instead.
*/
import {
  Table,
  Tr,
} from 'styled-table-component';

const MyTableComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <Table>
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
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
  </Table>
);
```

## Properties

Properties which can be added to the component to change the visual appearance. This component uses [styled-system](http://jxnblk.com/styled-system/).

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
* `m` margin **Type**: string
* `mt` margin-top **Type**: string
* `mr` margin-right **Type**: string
* `mb` margin-bottom **Type**: string
* `ml` margin-left **Type**: string
* `mx` margin-left and margin-right **Type**: string
* `my` margin-top and margin-bottom **Type**: string
* `p`  padding **Type**: string
* `pt` padding-top **Type**: string
* `pr` padding-right **Type**: string
* `pb` padding-bottom **Type**: string
* `pl` padding-left **Type**: string
* `px` padding-left and padding-right **Type**: string
* `py` padding-top and padding-bottom **Type**: string
* `width` **Type**: string
* `fontSize` **Type**: string
* `fontWeight` **Type**: string
* `textAlign` **Type**: string
* `lineHeight` **Type**: string
* `display` **Type**: string
* `color` **Type**: string
* `borderRadius` **Type**: string
* `borderColor` **Type**: string
* `border` **Type**: string
* `borderTop` **Type**: string
* `borderRight` **Type**: string
* `borderBottom` **Type**: string
* `borderLeft` **Type**: string

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)
* [styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Lukas Aichbauer
