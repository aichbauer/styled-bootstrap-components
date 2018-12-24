# styled-listgroup-component

[![npm](https://img.shields.io/npm/v/styled-listgroup-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-listgroup-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) listgroup component made with [styled-components](https://styled-components.com).

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

> Note: this component has a peer dependency on `styled-components` > v4. To use this component you also need to `npm i styled-components -S`.

```sh
$ npm i styled-listgroup-component -S
```

or

```sh
$ yarn add styled-listgroup-component
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

To use HTML that uses the Boostrap style, use [styled-base-components](https://github.com/aichbauer/styled-bootstrap-components/blob/master/packages/styled-base-components/README.md).

```jsx
/*
  if you installed `styled-bootstrap-components` use

    import { ... } from 'styled-bootstrap-components'

  instead.
*/
import {
  ListGroup,
  ListGroupItem,
} from 'styled-listgroup-component';

const MyListGroupComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <ListGroup>
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
);
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `flush` only on ListGroup **Type**: boolean
* `primary` only on ListGroupItem **Type**: boolean
* `secondary` only on ListGroupItem **Type**: boolean
* `success` only on ListGroupItem **Type**: boolean
* `danger` only on ListGroupItem **Type**: boolean
* `warning` only on ListGroupItem **Type**: boolean
* `info` only on ListGroupItem **Type**: boolean
* `light` only on ListGroupItem **Type**: boolean
* `dark` only on ListGroupItem **Type**: boolean
* `action` only on ListGroupItem **Type**: boolean
* `active` only on ListGroupItem **Type**: boolean
* `disabled` only on ListGroupItem **Type**: boolean

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)

## License

MIT © Lukas Aichbauer
