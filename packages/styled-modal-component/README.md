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
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from 'styled-modal-component';
import { Container } from 'styled-container-component';
import { Button } from 'styled-button-component';

export class MyModal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hidden: true,
    };
  }

  handleModal() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <div>
        <Modal hidden={hidden}>
          <ModalDialog>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>
                  Modal Title
                </ModalTitle>
                <Button outline onClick={() => this.handleModal()}>
                  <span aria-hidden="true">&times;</span>
                </Button>
              </ModalHeader>
              <ModalBody>
                <p>
                  Modal Body
                </p>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => this.handleModal()}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </ModalDialog>
        </Modal>
        <Button onClick={() => this.handleModal()} >
          Launch Modal
        </Button>
      </div>
    );
  }
};
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `sm` only on Modal **Type**: boolean
* `lg` only on Modal **Type**: boolean
* `hidden` only on Modal **Type**: boolean
* `centered` only on ModalDialog **Type**: boolean
* `noRadius` only on ModalContent **Type**: boolean

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)

## License

MIT © Lukas Aichbauer
