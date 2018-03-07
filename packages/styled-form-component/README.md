# styled-form-component

> The [bootstrap](https://getbootstrap.com) form component made with [styled-components](https://styled-components.com) and [styled-system](http://jxnblk.com/styled-system/)

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
$ npm i styled-form-component -S
```

or

```sh
$ yarn add styled-form-component
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

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
* `row` only on FormGroup **Type**: boolean
* `nomb` no margin-bottom, only on FormGroup **Type**: boolean
* `justify` only on FormGroup **Type**: boolean
* `muted` only on FormText **Type**: boolean
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
[styled-components](https://styled-components.com)
[styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Lukas Aichbauer
