# styled-card-component

[![npm](https://img.shields.io/npm/v/styled-card-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-card-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) card component made with [styled-components](https://styled-components.com).

This is a modular approach to use [bootstrap](https://getbootstrap.com)
components for quick prototypes, as an entrypoint of your own component
library, or if you need just one bootstrap component for your application.

## Installation

> Note: this component has a peer dependency on `styled-components` > v4. To use this component you also need to `npm i styled-components -S`.

```sh
npm install --save styled-card-component
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

```jsx
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImageHeader,
  CardText,
  CardTitle,
} from 'styled-card-component';

const MyCardWithImageHeaderComponent = (props) => (
  <Card>
    <CardImageHeader src="my/image/source.jpg" />
    <CardBody>
      <CardText>
        Card Text
      </CardText>
      <CardFooter>
        Card Footer
      </CardFooter>
    </CardBody>
  </Card>
);
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `noRadius` only on Card, CardHeader, CardImageHeader,
  CardFooter **Type**: boolean
* `h1` only on CardTitle **Type**: boolean
* `h2` only on CardTitle **Type**: boolean
* `h3` only on CardTitle **Type**: boolean
* `h4` only on CardTitle **Type**: boolean
* `h5` only on CardTitle **Type**: boolean
* `h6` only on CardTitle **Type**: boolean

## License

MIT © Lukas Aichbauer
