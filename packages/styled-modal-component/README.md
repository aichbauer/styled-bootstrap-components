# styled-modal-component

> The [bootstrap](https://getbootstrap.com) modal component made with [styled components](https://styled-components.com) and [styled-system](http://jxnblk.com/styled-system/)

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
$ npm i styled-modal-component styled-container-component styled-button-component
```

or

```sh
$ yarn add styled-modal-component styled-container-component styled-button-component
```

## Usage

For more detailed information take a look at the [documentation with Storybook](https://aichbauer.github.io/react-styled-bootstrap-components).

```jsx
import React from 'react';

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
              </ModalHeader>
            </ModalContent>
          </ModalDialog>
        </Modal>
        <Button onClick={() => this.handleModal()} >
          Launch Modal
        </Button>
      <div>
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
