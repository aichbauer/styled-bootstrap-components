# styled-button-component

[![npm](https://img.shields.io/npm/v/styled-button-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-button-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) button component made with [styled-components](https://styled-components.com).

This is a modular approach to use [bootstrap](https://getbootstrap.com)
components for quick prototypes, as an entrypoint of your own component
library, or if you need just one bootstrap component for your application.

## Installation

```sh
npm install --save styled-button-component
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

```jsx
import {
  Button,
  LinkButton,
  ButtonGroups,
  ButtonToolbar,
} from 'styled-button-component';

const MyButtonComponent = (props) => (
  <Button primary outline disabled>My Button</Button>
);

const MyButtonGroupComponent = (props) => (
  <ButtonGroup>
    <Button secondary>Left</Button>
    <Button secondary>Middle</Button>
    <Button secondary>Right</Button>
  </ButtonGroup>
);

const MyButtonToolbarComponent = (props) => (
  <ButtonToolbar>
    <ButtonGroup mr2>
      <LinkButton secondary>1</LinkButton>
      <LinkButton secondary>2</LinkButton>
      <LinkButton secondary>3</LinkButton>
      <LinkButton secondary>4</LinkButton>
    </ButtonGroup>
    <ButtonGroup mr2>
      <LinkButton secondary>5</LinkButton>
      <LinkButton secondary>6</LinkButton>
      <LinkButton secondary>7</LinkButton>
    </ButtonGroup>
    <ButtonGroup>
      <LinkButton secondary>8</LinkButton>
    </ButtonGroup>
  </ButtonToolbar>
);
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `pill` only on Button, LinkButton **Type**: boolean
* `noRadius` only on Button, LinkButton **Type**: boolean
* `primary` **Type**: boolean
* `secondary` **Type**: boolean
* `success` **Type**: boolean
* `danger` **Type**: boolean
* `warning` **Type**: boolean
* `info` **Type**: boolean
* `light` **Type**: boolean
* `dark` **Type**: boolean
* `active` **Type**: boolean
* `disabled` **Type**: boolean
* `outline` **Type**: boolean
* `block` **Type**: boolean
* `sm` small **Type**: boolean
* `lg` large **Type**: boolean
* `vertical` only on ButtonGroup **Type**: boolean

## License

MIT © Lukas Aichbauer
