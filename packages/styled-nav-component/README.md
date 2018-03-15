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

This is a modular approach to use [bootstrap](https://getbootstrap.com) components for quick prototypes, as an entrypoint of your own component library, or if you need just one [bootstrap](https://getbootstrap.com) component for your application. To work with ease with any other libary or framework this component is build with [styled-components](https://styled-components.com).

## Installation

> Note: this component has a peer dependency on `styled-components` and `styled-system`. To use this component you also need to `npm i styled-components styled-system -S`.

```sh
$ npm i styled-nav-component
```

or

```sh
$ yarn add styled-nav-component
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
  Nav,
  NavLink,
} from 'styled-nav-component';

const MyNavWithReactRouter = (props) => (
  {/* use different props to change visual the appearance */}
  <Nav end>
    <NavLink active router to="#">Active</NavLink>
    <NavLink router to="#">Link</NavLink>
    <NavLink router to="#">Link</NavLink>
    <NavLink router disabled to="#">Disabled</NavLink>
  </Nav>
);

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

## Properties

Properties which can be added to the component to change the visual appearance. This component uses [styled-system](http://jxnblk.com/styled-system/).

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
* `active` only on NavLink **Type**: string
* `disabled` only on NavLink **Type**: string
* `item` only on NavLink **Type**: string
* `m`  margin **Type**: string
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
