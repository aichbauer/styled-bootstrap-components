# styled-grid-system-component

[![npm](https://img.shields.io/npm/v/styled-grid-system-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-grid-system-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) grid system component made with [styled-components](https://styled-components.com)

This is a modular approach to use [bootstrap](https://getbootstrap.com)
components for quick prototypes, as an entrypoint of your own component
library, or if you need just one bootstrap component for your application.

## Installation

> Note: this component has a peer dependency on `styled-components` > v4. To use this component you also need to `npm i styled-components -S`.

```sh
npm install --save styled-grid-system-component
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

```jsx
import { Column, Row } from 'styled-grid-system-component';

const MyGridComponent = (props) => (
  <div>
    <Row>
      <Column xs={6}>
        {'xs={6}'}
      </Column>
      <Column xs={6}>
        {'xs={6}'}
      </Column>
    </Row>

    <Row>
      <Column>
        {'no props'}
      </Column>
      <Column>
        {'no props'}
      </Column>
      <Column>
        {'no props'}
      </Column>
    </Row>

    <Row>
      <Column xs={3}>
        {'xs={3}'}
      </Column>
      <Column xs={3}>
        {'xs={3}'}
      </Column>
      <Column xs={6}>
        {'xs={6}'}
      </Column>
    </Row>
  </div>
);
```

## Properties

Properties which can be added to the component to change the visual appearance. Every row consists of maximum of 12 columns.

* `xs` **Type:** only on Column, number (between 1 and 12)
* `sm` **Type:** only on Column, number (between 1 and 12)
* `md` **Type:** only on Column, number (between 1 and 12)
* `lg` **Type:** only on Column, number (between 1 and 12)
* `xl` **Type:** only on Column, number (between 1 and 12)
* `xsOffset` **Type:** only on Column, number (between 1 and 12)
* `smOffset` **Type:** only on Column, number (between 1 and 12)
* `mdOffset` **Type:** only on Column, number (between 1 and 12)
* `lgOffset` **Type:** only on Column, number (between 1 and 12)
* `xlOffset` **Type:** only on Column, number (between 1 and 12)

## License

MIT © Lukas Aichbauer
