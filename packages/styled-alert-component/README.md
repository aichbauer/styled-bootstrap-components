# styled-alert-component

[![npm](https://img.shields.io/npm/v/styled-alert-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-alert-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) alert component made with [styled-components](https://styled-components.com)

This is a modular approach to use [bootstrap](https://getbootstrap.com)
components for quick prototypes, as an entrypoint of your own component
library, or if you need just one bootstrap component for your application.

## Installation

```sh
npm install --save styled-alert-component
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

## Usage

For detailed information with examples take a look at
the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

```jsx
// import { Alert } from 'styled-bootstrap-components';
import { Alert } from 'styled-alert-component';

const SuccessAlert = (props) => (
  <Alert success>Well done!</Alert>
);
```

> Import components from `styled-bootstrap-component` if
> you have it installed.

## Properties

Properties which can be added to the component to change the visual appearance.

* `noRadius` **Type**: boolean
* `pill` **Type**: boolean
* `primary` **Type**: boolean
* `secondary` **Type**: boolean
* `success` **Type**: boolean
* `danger` **Type**: boolean
* `warning` **Type**: boolean
* `info` **Type**: boolean
* `light` **Type**: boolean
* `dark` **Type**: boolean

## License

MIT © Lukas Aichbauer
