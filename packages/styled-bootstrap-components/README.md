# styled-bootstrap-components

[![npm](https://img.shields.io/npm/v/styled-bootstrap-components.svg?style=flat-square)](https://www.npmjs.com/package/styled-bootstrap-components)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) components made with [styled-components](https://styled-components.com).

I wanted to use [bootstrap](https://getbootstrap.com) with
[React](https://reactjs.org/) for **fast prototypes**, or as
entrypoint for **my own UI Component Library**, or if I needed
just one bootstrap component for my application, now I can
simply install that specific component. This repository uses
[lerna](https://lernajs.io/) to maintain mumltiple packages.

## Installation

```sh
npm install --save styled-bootstrap-components
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

or you can install just the components that you need by following the installation guides in the [components section](#components).

## Usage

For detailed information (also on how to customize this components) take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

To see which components are available take a look at the [components section](#components).

```jsx
// whatever components you need
import { Button } from 'styled-bootstrap-components';

export const myComponent = (props) => (
  <Button>Hello, World!</Button>
);
```

## Components

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

* [Alert Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-alert-component#readme)
* [Badge Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-badge-component#readme)
* [Base Components](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-base-components#readme)
* [Breadcrumb Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-breadcrumb-component#readme)
* [Button Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-button-component#readme)
* [Card Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-card-component#readme)
* [Container Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-container-component#readme)
* [Dropdown Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-dropdown-component#readme)
* [Form Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-form-component#readme)
* [Grid Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-grid-system-component#readme)
* [Jumbotron Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-jumbotron-component#readme)
* [Listgroup Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-listgroup-component#readme)
* [Modal Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-modal-component#readme)
* [Nav Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-nav-component#readme)
* [Navbar Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-navbar-component#readme)
* [Popover Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-popover-component#readme)
* [Table Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-table-component#readme)
* [Tooltip Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-tooltip-component#readme)

## License

MIT © Lukas Aichbauer
