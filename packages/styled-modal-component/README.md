# styled-modal-component

[![npm](https://img.shields.io/npm/v/styled-modal-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-modal-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) modal component made with [styled-components](https://styled-components.com).

This is a modular approach to use [bootstrap](https://getbootstrap.com)
components for quick prototypes, as an entrypoint of your own component
library, or if you need just one bootstrap component for your application.

## Installation

```sh
npm install --save styled-modal-component
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

```jsx
import React, { useState } from 'react';

import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from 'styled-modal-component';

export const ModalExample = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <Modal hidden={hidden} toggle={() => setHidden(!hidden)}>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>

          <button outline onClick={() => setHidden(!hidden)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </ModalHeader>

        <ModalBody>
          Modal body text goes here.
        </ModalBody>

        <ModalFooter>
          <button onClick={() => setHidden(!hidden)}>Close</button>
        </ModalFooter>
      </Modal>

      <button block danger onClick={() => setHidden(!hidden)}>
        Launch Modal
      </button>
    </div>
  );
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

## License

MIT © Lukas Aichbauer
