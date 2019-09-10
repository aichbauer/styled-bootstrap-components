# styled-listgroup-component

[![npm](https://img.shields.io/npm/v/styled-listgroup-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-listgroup-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) listgroup component made with [styled-components](https://styled-components.com).

This is a modular approach to use [bootstrap](https://getbootstrap.com)
components for quick prototypes, as an entrypoint of your own component
library, or if you need just one bootstrap component for your application.

## Installation

```sh
npm install --save styled-listgroup-component
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

```jsx
import {
  ListGroup,
  ListGroupItem,
} from 'styled-listgroup-component';

const MyListGroupComponent = (props) => (
  <ListGroup>
    <ListGroupItem active>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem disabled>Vestibulum at eros</ListGroupItem>
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

## License

MIT © Lukas Aichbauer
