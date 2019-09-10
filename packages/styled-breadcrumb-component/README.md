# styled-breadcrumb-component

[![npm](https://img.shields.io/npm/v/styled-breadcrumb-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-breadcrumb-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) breadcrumb component made with [styled-components](https://styled-components.com).

This is a modular approach to use [bootstrap](https://getbootstrap.com)
components for quick prototypes, as an entrypoint of your own component
library, or if you need just one bootstrap component for your application.

## Installation

```sh
npm install --save styled-breadcrumb-component
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

```jsx
import {
  Breadcrumb,
  BreadcrumbItem,
} from 'styled-breadcrumb-component';

const MyBreadcrumbComponent = (props) => (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="#">Home</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#">Library</a>
    </BreadcrumbItem>
    <BreadcrumbItem active>
      Data
    </BreadcrumbItem>
  </Breadcrumb>
);
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `pill` only on Breadcrumb **Type**: boolean
* `noRadius` only on Breadcrumb **Type**: boolean
* `active` only on BreadcrumbItem **Type**: boolean

## License

MIT © Lukas Aichbauer
