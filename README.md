# styled-bootstrap-components

[![npm](https://img.shields.io/npm/v/styled-bootstrap-components.svg?style=flat-square)](https://www.npmjs.com/package/styled-bootstrap-components)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) components made with [styled-components](https://styled-components.com).

## Table of Contents

* [Documentation](https://aichbauer.github.io/styled-bootstrap-components)
* [Why?](#why)
* [Installation](#installation)
* [Usage](#Usage)
* [Components](#components)
* [Related](#related)
* [License](#license)

## Why?

* I wanted to use [bootstrap](https://getbootstrap.com) with [React](https://reactjs.org/) for **fast prototypes**, or as an entrypoint for **my own UI Component Library**, or if I needed just one bootstrap component for my application, now I can simply install that specific component. To work with ease with any other library or framework these components are built with [styled-components](https://styled-components.com).
* I wanted to learn a bit more on how CSS works and on how to build a CSS UI Library from scratch, mostly but not only by reading the [bootstrap CSS code](https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.css) and the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS). 
* I wanted to learn how to manage and maintain a monorepo with multiple packages based on [lerna](https://lernajs.io/).

## Installation

You can install all bootstrap components with...

> Note: every component has a peer dependency on `styled-components` > v4. To use these components you also need to `npm i styled-components -S`.

```sh
$ npm i styled-bootstrap-components -S
```

or

```sh
$ yarn add styled-bootstrap-components
```

or you can install just the components that you need by following the installation guides in the [components section](#components).

## Usage

For detailed information (also on how to customize these components) take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

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

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)

## License

MIT © Lukas Aichbauer
