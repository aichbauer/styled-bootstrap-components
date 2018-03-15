# styled-config

[![npm](https://img.shields.io/npm/v/styled-config.svg?style=flat-square)](https://www.npmjs.com/package/styled-config)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The configuration for styled-bootstrap-components

## Table of Contents

* [Documentation](https://aichbauer.github.io/styled-bootstrap-components)
* [Installation](#installation)
* [Usage](#usage)
* [Related](#related)
* [License](#license)

## Installation

```sh
$ npm i styled-config -S
```

or

```sh
$ yarn add styled-config
```

## Usage

This package just holds the configuration for the styled-bootstrap-components. For now they are just holding the screen sizes.
In the future this package will hold also the configuration for colors, and borders.

```js
import { screenSize } from 'styled-config';

// 576px
screenSize.sm
// 768px
screenSize.md
// 992px
screenSize.lg
// 1200px
screenSize.xl
```

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)
* [styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Lukas Aichbauer
