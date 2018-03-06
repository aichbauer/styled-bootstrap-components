# styled-button-component

> The [bootstrap](https://getbootstrap.com) button component made with [styled components](https://styled-components.com) and [styled-system](http://jxnblk.com/styled-system/)

## Table of Contents

* [Documentation with Storybook](https://aichbauer.github.io/react-styled-bootstrap-components)
* [Why?](#why)
* [Installation](#installation)
* [Usage](#usage)
* [Properties](#properties)
* [Related](#related)
* [License](#license)

## Why?

This is a modular approach to use [bootstrap](https://getbootstrap.com) components for quick prototypes, as an entrypoint of your own component library, or if you need just one [bootstrap](https://getbootstrap.com) component for your application. To work with ease with any other libary or framework this component is build with [styled components](https://styled-components.com) and [styled-system](http://jxnblk.com/styled-system/).

## Installation

```sh
$ npm i styled-button-component -S
```

or

```sh
$ yarn add styled-button-component
```

## Usage

For more detailed information take a look at the [documentation with Storybook](https://aichbauer.github.io/react-styled-bootstrap-components).

```jsx
import {
  Button,
  ButtonGroups,
  ButtonToolbar,
} from 'styled-button-component';

const MyButtonComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <Button primary outline disabled>My Button</Button>
);

const MyButtonGroupComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <ButtonGroup>
    <Button secondary>Left</Button>
    <Button secondary>Middle</Button>
    <Button secondary>Right</Button>
  </ButtonGroup>
);

const MyButtonToolbarComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <ButtonToolbar>
    <ButtonGroup mr="0.5rem">
      <Button secondary>1</Button>
      <Button secondary>2</Button>
      <Button secondary>3</Button>
      <Button secondary>4</Button>
    </ButtonGroup>
    <ButtonGroup mr="0.5rem">
      <Button secondary>5</Button>
      <Button secondary>6</Button>
      <Button secondary>7</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button secondary>8</Button>
    </ButtonGroup>
  </ButtonToolbar>
);
```

## Properties

Properties which can be added to the component to change the visual appearance.

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

[bootstrap](https://getbootstrap.com)
[styled components](https://styled-components.com)
[styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Lukas Aichbauer
