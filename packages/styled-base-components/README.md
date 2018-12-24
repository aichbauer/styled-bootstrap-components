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

This is a modular approach to use [bootstrap](https://getbootstrap.com) components for quick prototypes, as an entrypoint of your own component library, or if you need just one [bootstrap](https://getbootstrap.com) component for your application. To work with ease with any other libary or framework this component is built with [styled-components](https://styled-components.com).

## Installation

> Note: this component has a peer dependency on `styled-components` > v4. To use this component you also need to `npm i styled-components -S`.

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

    import { BootstrapBaseCss } from 'styled-bootstrap-components'

  instead.
*/
import { BootstrapBaseCss } from 'styled-base-components';

const App = (props) => (
  <div>
    <BootstrapBaseCss />
    {/*
      Use plain HTML
      e.g. <h4>Hello World</h4>
      these HTML uses the bootstrap
      styles for h4 now
    */}
  <div>
);
```

## Properties

This component do not have any specific props, this is just the pre-styled html to work with the bootstrap layout.

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)

## License

MIT © Lukas Aichbauer
