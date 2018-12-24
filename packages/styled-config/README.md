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

This package holds the theme for the styled-bootstrap-components.

You can use is to customize your components.

```js
import { ThemeProvider } from 'styled-components';
import { theme } from 'styled-config';
import { Button } from 'styled-button-component';

// change the colors of a primary button in your app
const App = (props) => (
  <ThemeProvider
    theme={{
      ...theme
      button: {
        colors: {
          primary:  {
            color: 'white',
            backgroundColor: 'lightgreen',
            backgroundColorHoverFocus: 'green',
          },
        },
      },
    }}
  >
    <Button primary>Hi, I'm a green primary button</Button>
  </ThemeProvider>
)
```

To see how to modify all the styled-bootstrap-components to create your own UI component library take a look at the [theme](https://github.com/aichbauer/styled-bootstrap-components/blob/master/packages/styled-config/test/fixtures/index.js)

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)

## License

MIT © Lukas Aichbauer
