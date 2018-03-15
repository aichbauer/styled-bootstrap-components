# styled-base-components

[![npm](https://img.shields.io/npm/v/styled-base-components.svg?style=flat-square)](https://www.npmjs.com/package/styled-base-components)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) base components made with [styled-components](https://styled-components.com).

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
$ npm i styled-base-components -S
```

or

```sh
$ yarn add styled-base-components
```

## Usage

> This are just pre-styled html elements to work with the bootstrap layout. They use the styles from bootstrap.

```jsx
/*
  if you installed `styled-bootstrap-components` use

    import { ... } from 'styled-bootstrap-components'

  instead.
*/
import {
  A,
  Abbr,
  Address,
  Article,
  Aside,
  B,
  Blockquote,
  Button,
  Caption,
  Code,
  Dd,
  Dfn,
  Dialog,
  Dl,
  Dt,
  Fieldset,
  Figcaption,
  Figure,
  Footer,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Header,
  Hgroup,
  Hr,
  Img,
  Input,
  Kbd,
  Label,
  Main,
  Nav,
  Ol,
  Optgroup,
  Output,
  P,
  Pre,
  Progress,
  Samp,
  Section,
  Select,
  Small,
  Strong,
  Sub,
  Summary,
  Sup,
  Svg,
  Table,
  Textarea,
  Th,
  Ul,
} from 'styled-base-components';

const MyComponent = (props) => (
  {/* use the base components */}
);
```

## Properties

This components do not have any specific props, they are just pre-styled html elements to work with the bootstrap layout. They use the styles from bootstrap.

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)
* [styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Lukas Aichbauer
