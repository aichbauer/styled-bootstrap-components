# styled-form-component

[![npm](https://img.shields.io/npm/v/styled-form-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-form-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) form component made with [styled-components](https://styled-components.com).

## Table of Contents

* [Documentation](https://aichbauer.github.io/styled-bootstrap-components)
* [Why?](#why)
* [Installation](#installation)
* [Usage](#usage)
* [Properties](#properties)
* [Related](#related)
* [License](#license)

## Why?

This is a modular approach to use [bootstrap](https://getbootstrap.com) components for quick prototypes, as an entrypoint of your own component library, or if you need just one [bootstrap](https://getbootstrap.com) component for your application. To work with ease with any other libary or framework this component is built with [styled-components](https://styled-components.com).

## Installation

> Note: this component has a peer dependency on `styled-components` > v4. To use this component you also need to `npm i styled-components -S`.

```sh
$ npm i styled-form-component -S
```

or

```sh
$ yarn add styled-form-component
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

To use HTML that uses the Boostrap style, use [styled-base-components](https://github.com/aichbauer/styled-bootstrap-components/blob/master/packages/styled-base-components/README.md).

```jsx
/*
  if you installed `styled-bootstrap-components` use

    import { ... } from 'styled-bootstrap-components'

  instead.
*/
import {
  Button,
  ButtonGroups,
  ButtonToolbar,
} from 'styled-form-component';

const MyFormComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <form>
    <FormGroup>
      <Label>Email address</Label>
      <FormControl type="email" placeholder="name@example.com" />
    </FormGroup>
    <FormGroup>
      <Label>Example select</Label>
      <FormControl select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </FormControl>
    </FormGroup>
    <FormGroup>
      <Label>Example multiple select</Label>
      <FormControl select multiple>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </FormControl>
    </FormGroup>
    <FormGroup>
      <Label>Example textarea</Label>
      <FormControl textarea rows="3" />
    </FormGroup>
    <FormGroup>
      <Label>Example file input</Label>
      <FormControlFile type="file" />
    </FormGroup>
  </form>
);

const MyInputGroupComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <InputGroup>
    <InputGroupPrepend>
      <InputGroupText>@</InputGroupText>
    </InputGroupPrepend>
    <FormControl type="text" placeholder="Username" />
  </InputGroup>
);
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `inline` only on FormCheck, FormControlPlainText **Type**: boolean
* `disabled` only on FormCheckInput, FormControl **Type**: boolean
* `readonly` only on FormControl **Type**: boolean
* `valid` only on FormControl **Type**: boolean
* `invalid` only on FormControl **Type**: boolean
* `formInline` only on FormControl, FormGroup **Type**: boolean
* `sm` small, only on FormControl, FormControlPlainText, FormGroup, InputGroup **Type**: boolean
* `lg` large, only on FormControl, FormControlPlainText, FormGroup, InputGroup **Type**: boolean
* `multiple` only on FormControl **Type**: boolean
* `select` only on FormControl **Type**: boolean
* `textarea` only on FormControl **Type**: boolean
* `pill` only on FormControl **Type**: boolean
* `noRadius` only on FormControl, FormGroup **Type**: boolean
* `row` only on FormGroup **Type**: boolean
* `nomb` no margin-bottom, only on FormGroup **Type**: boolean
* `justify` only on FormGroup **Type**: boolean
* `muted` only on FormText **Type**: boolean

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)

## License

MIT © Lukas Aichbauer
