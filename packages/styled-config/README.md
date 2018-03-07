# styled-config

> The configuration for styled-bootstrap-components

## Table of Contents

* [Documentation](https://aichbauer.github.io/react-styled-bootstrap-components)
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

[bootstrap](https://getbootstrap.com)
[styled-components](https://styled-components.com)
[styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Lukas Aichbauer
