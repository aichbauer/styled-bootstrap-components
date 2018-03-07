# styled-grid-component

> The [bootstrap](https://getbootstrap.com) grid component made with [styled-components](https://styled-components.com)

## Table of Contents

* [Documentation](https://aichbauer.github.io/react-styled-bootstrap-components)
* [Why?](#why)
* [Installation](#installation)
* [Usage](#usage)
* [Properties](#properties)
* [Related](#related)
* [License](#license)

## Why?

This is a modular approach to use [bootstrap](https://getbootstrap.com) components for quick prototypes, as an entrypoint of your own component library, or if you need just one [bootstrap](https://getbootstrap.com) component for your application. To work with ease with any other libary or framework this component is build with [styled-components](https://styled-components.com) and [styled-system](http://jxnblk.com/styled-system/).

## Installation

```sh
$ npm i styled-grid-component -S
```

or

```sh
$ yarn add styled-grid-component
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

> Note: if you want this example to work you need to install the `styled-container-component` as well, but you do not need a `<Container />` component around a `<Row />` or `<Column />` component.

```jsx
/*
  if you installed `styled-bootstrap-components` use

    import { ... } from 'styled-bootstrap-components'

  instead.
*/
import { Container } from 'styled-container-component';
import {
  Column,
  Row,
} from 'styled-grid-component';

const MyGridComponent = (props) => (
  {/* fixed width for small, medium, large and xlarge screen width */}
  <Container fluid>
    {/* column grows to 100% width at screen width 576px */}
    <Row>
      <Column sm={4}>
        <p>
          {'<Column sm={4}>'}
        </p>
        <p>
          ...
        </p>
        <p>
          {'</Column>'}
        </p>
      </Column>
      <Column sm={4}>
        <p>
          {'<Column sm={4}>'}
        </p>
        <p>
          ...
        </p>
        <p>
          {'</Column>'}
        </p>
      </Column>
      <Column sm={4}>
        <p>
          {'<Column sm={4}>'}
        </p>
        <p>
          ...
        </p>
        <p>
          {'</Column>'}
        </p>
      </Column>
    </Row>
    {/* column grows to 100% width at screen width 768px */}
    <Row>
      <Column md={4}>
        <p>
          {'<Column md={3}>'}
        </p>
        <p>
          ...
        </p>
        <p>
          {'</Column>'}
        </p>
      </Column>
      <Column md={4}>
        <p>
          {'<Column md={3}>'}
        </p>
        <p>
          ...
        </p>
        <p>
          {'</Column>'}
        </p>
      </Column>
      <Column md={4}>
        <p>
          {'<Column md={3}>'}
        </p>
        <p>
          ...
        </p>
        <p>
          {'</Column>'}
        </p>
      </Column>
    </Row>
    {/* column grows to 100% width at screen width 992px */}
    <Row>
      <Column lg={4}>
        <p>
          {'<Column lg={3}>'}
        </p>
        <p>
          ...
        </p>
        <p>
          {'</Column>'}
        </p>
      </Column>
      <Column lg={4}>
        <p>
          {'<Column lg={3}>'}
        </p>
        <p>
          ...
        </p>
        <p>
          {'</Column>'}
        </p>
      </Column>
      <Column lg={4}>
        <p>
          {'<Column lg={3}>'}
        </p>
        <p>
          ...
        </p>
        <p>
          {'</Column>'}
        </p>
      </Column>
    </Row>
    {/* column grows to 100% width at screen width 1200px */}
    <Row>
      <Column xl={4}>
        <p>
          {'<Column xl={3}>'}
        </p>
        <p>
          ...
        </p>
        <p>
          {'</Column>'}
        </p>
      </Column>
      <Column xl={4}>
        <p>
          {'<Column xl={3}>'}
        </p>
        <p>
          ...
        </p>
        <p>
          {'</Column>'}
        </p>
      </Column>
      <Column xl={4}>
        <p>
          {'<Column xl={3}>'}
        </p>
        <p>
          ...
        </p>
        <p>
          {'</Column>'}
        </p>
      </Column>
    </Row>
  </Container>
);
```

## Properties

Properties which can be added to the component to change the visual appearance. Only on Column Component.

Every row consists of maximum of 12 columns.

* sm **Type:** number (between 1 and 12)
* md **Type:** number (between 1 and 12)
* lg **Type:** number (between 1 and 12)
* xl **Type:** number (between 1 and 12)

## Related

[bootstrap](https://getbootstrap.com)
[styled-components](https://styled-components.com)
[styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Lukas Aichbauer
