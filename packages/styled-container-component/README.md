# styled-container-component

> The [bootstrap](https://getbootstrap.com) container component made with [styled components](https://styled-components.com)

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
$ npm i styled-container-component -S
```

or

```sh
$ yarn add styled-container-component
```

## Usage

For more detailed information take a look at the [documentation with Storybook](https://aichbauer.github.io/react-styled-bootstrap-components).

```jsx
import { Container } from 'styled-container-components';

const MyContainerComponent = (props) => (
  {/* fixed width for small, medium, large and xlarge screen width */}
  <Container>
    {props.children}
  </Container>
);

const MyContainerFluidComponent = (props) => (
  {/* always 100% width */}
  <Container fluid>
    {props.children}
  </Container>
);
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `fluid` **Type**: boolean

## Related

[bootstrap](https://getbootstrap.com)
[styled components](https://styled-components.com)
[styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Lukas Aichbauer
