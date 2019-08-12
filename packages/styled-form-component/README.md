# styled-form-component

[![npm](https://img.shields.io/npm/v/styled-form-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-form-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) form component made with [styled-components](https://styled-components.com).

This is a modular approach to use [bootstrap](https://getbootstrap.com)
components for quick prototypes, as an entrypoint of your own component
library, or if you need just one bootstrap component for your application.

## Installation

```sh
npm install --save styled-form-component
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

```jsx
import {
  Button,
  ButtonGroups,
  ButtonToolbar,
} from 'styled-form-component';

const MyFormComponent = (props) => (
  <form>
    <FormGroup>
      <label>Email address <FormControl type="email" placeholder="Enter email" /></label>
      <FormText muted>We&#39;ll never share your email with anyone else.</FormText>
    </FormGroup>
    <FormGroup>
      <label>Password <FormControl type="password" placeholder="Password" /></label>
    </FormGroup>
    <FormCheck>
      <label><FormCheckInput type="checkbox" /> Check me out</label>
    </FormCheck>
    <FormGroup>
      <Button block primary>Submit</Button>
    </FormGroup>
  </form>
);

const MyInputGroupComponent = (props) => (
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

## License

MIT © Lukas Aichbauer
