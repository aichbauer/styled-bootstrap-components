# styled-modal-component

[![npm](https://img.shields.io/npm/v/styled-modal-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-modal-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) modal component made with [styled-components](https://styled-components.com).

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
$ npm i styled-modal-component
```

or

```sh
$ yarn add styled-modal-component
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

To use HTML that uses the Boostrap style, use [styled-base-components](https://github.com/aichbauer/styled-bootstrap-components/blob/master/packages/styled-base-components/README.md).

> Note: if you want this example to work you need to install `styled-container-component`, and `styled-button-component` as well, but you do not need a `<Container />` component or a `<Button />`  to work with `styled-modal-component`.

```jsx
import React from 'react';

/*
  if you installed `styled-bootstrap-components` use

    import { ... } from 'styled-bootstrap-components'

  instead.
*/
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from 'styled-modal-component';
import { Container } from 'styled-container-component';
import { Button } from 'styled-button-component';

export class ModalExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    const { hidden } = this.state;

    return (
      <Container>
        <Modal hidden={hidden} toggle={this.toggleModal}>
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>

            <Button outline onClick={this.toggleModal}>
              <span aria-hidden="true">&times;</span>
            </Button>
          </ModalHeader>

          <ModalBody textAlign="left">
            Modal body text goes here.
          </ModalBody>

          <ModalFooter>
            <Button onClick={this.toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>

        <Button block danger onClick={this.toggleModal}>
          Launch Modal
        </Button>
      </Container>
    );
  }
}
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `sm` only on Modal **Type**: boolean
* `lg` only on Modal **Type**: boolean
* `hidden` only on Modal **Type**: boolean
* `toggle` only on Modal **Type**: function
* `centered` only on Modal **Type**: boolean
* `backdrop` only on Modal **Type**: boolean or string
* `noRadius` only on Modal **Type**: boolean
* `returnFocusAfterClose` only on Modal **Type**: boolean
* `transitionProps` only on Modal **Type**: object
* `wrapperProps` only on Modal **Type**: object
* `dialogProps` only on Modal **Type**: object
* `contentProps` only on Modal **Type**: object
* `backdropProps` only on Modal **Type**: object
* `TransitionComponent` only on Modal **Type**: Component (with forwarded ref)
* `ModalWrapperComponent` only on Modal **Type**: Component (with forwarded ref)
* `ModalDialogComponent` only on Modal **Type**: Component
* `ModalBackdropComponent` only on Modal **Type**: Component
* `ModalContentComponent` only on Modal **Type**: Component

> Property `backdrop` can be set to false or 'static' to prevent dialog from
> closing on click outsite of the window.

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)

## License

MIT © Lukas Aichbauer
