# styled-grid-system-component

[![npm](https://img.shields.io/npm/v/styled-grid-system-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-grid-system-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) grid system component made with [styled-components](https://styled-components.com)

## Table of Contents

* [Documentation](https://aichbauer.github.io/styled-bootstrap-components)
* [Why?](#why)
* [Installation](#installation)
* [Usage](#usage)
* [Properties](#properties)
* [Related](#related)
* [License](#license)

## Why?

This is a modular approach to use [bootstrap](https://getbootstrap.com) components for quick prototypes, as an entrypoint of your own component library, or if you need just one [bootstrap](https://getbootstrap.com) component for your application. To work with ease with any other libary or framework this component is build with [styled-components](https://styled-components.com).

## Installation

```sh
$ npm i styled-grid-system-component -S
```

or

```sh
$ yarn add styled-grid-system-component
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
} from 'styled-grid-system-component';

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

Properties which can be added to the component to change the visual appearance.

Every row consists of maximum of 12 columns.

* sm **Type:** only on Column, number (between 1 and 12)
* md **Type:** only on Column, number (between 1 and 12)
* lg **Type:** only on Column, number (between 1 and 12)
* xl **Type:** only on Column, number (between 1 and 12)
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
* `alignItems` **Type**: string
* `justifyContent` **Type**: string
* `flexWrap` **Type**: string
* `flexDirection` **Type**: string
* `flex` **Type**: string
* `alignContent` **Type**: string
* `justifySelf` **Type**: string
* `alignSelf` **Type**: string
* `flexBasis` **Type**: string

## Related

[bootstrap](https://getbootstrap.com)
[styled-components](https://styled-components.com)
[styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Lukas Aichbauer
