# styled-nav-component

[![npm](https://img.shields.io/npm/v/styled-nav-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-nav-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) nav component made with [styled-components](https://styled-components.com).

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
$ npm i styled-nav-component
```

or

```sh
$ yarn add styled-nav-component
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
  Nav,
  NavLink,
} from 'styled-nav-component';

const MyNavWithATag = (props) => (
  {/* use different props to change visual the appearance */}
  <Nav vertical>
    <NavLink tabs active href="#">Active</NavLink>
    <NavLink tabs href="#">Link</NavLink>
    <NavLink tabs href="#">Link</NavLink>
    <NavLink tabs disabled href="#">Disabled</NavLink>
  </Nav>
);
```

Usage with [react-router-dom](https://reacttraining.com/react-router/web/example/basic).

```jsx
/*
  if you installed `styled-bootstrap-components` use

    import { ... } from 'styled-bootstrap-components'

  instead.
*/
import {
  Nav,
  NavLink,
} from 'styled-nav-component';
import { Link } from 'react-router-dom';

const MyNavWithReactRouterDom = (props) => (
  {/* use different props to change visual the appearance */}
  <Nav vertical>
    <Link to="#">
      <NavLink tabs active>Active</NavLink>
    </Link>
    <Link to="#">
      <NavLink tabs>Link</NavLink>
    </Link>
    <Link to="#">
      <NavLink tabs>Link</NavLink>
    </Link>
    <Link to="#">
      <NavLink tabs disabled>Disabled</NavLink>
    </Link>
  </Nav>
);
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `collapse` only on Nav **Type**: boolean
* `expandSm` only on Nav **Type**: boolean
* `expandMd` only on Nav **Type**: boolean
* `expandLg` only on Nav **Type**: boolean
* `expandXl` only on Nav **Type**: boolean
* `hidden` only on Nav **Type**: boolean
* `start` only on Nav **Type**: string
* `center` only on Nav **Type**: string
* `end` only on Nav **Type**: string
* `vertical` only on Nav **Type**: string
* `justified` only on Nav **Type**: string
* `fill` only on Nav **Type**: string
* `tabs` only on NavLink **Type**: string
* `pills` only on NavLink **Type**: string
* `noRadius` only on NavLink **Type**: string
* `active` only on NavLink **Type**: string
* `disabled` only on NavLink **Type**: string
* `item` only on NavLink **Type**: string

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)

## License

MIT © Lukas Aichbauer
