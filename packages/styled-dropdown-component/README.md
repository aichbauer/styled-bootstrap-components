# styled-dropdown-component

[![npm](https://img.shields.io/npm/v/styled-dropdown-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-dropdown-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) dropdown component made with [styled-components](https://styled-components.com).

This is a modular approach to use [bootstrap](https://getbootstrap.com)
components for quick prototypes, as an entrypoint of your own component
library, or if you need just one bootstrap component for your application.

## Installation

> Note: this component has a peer dependency on `styled-components` > v4. To use this component you also need to `npm i styled-components -S`.

```sh
npm install --save styled-dropdown-component
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

```jsx
import React, { useState } from 'react';

import { Button } from 'styled-button-component';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from 'styled-dropdown-component';

export const SimpleDropdown = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <Dropdown>
      <Button dropdownToggle onClick={() => setHidden(!hidden)}>
        Dropdown Button
      </Button>
      <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Action after divider</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `active` only on DropdownItem **Type**: boolean
* `hidden` only on DropdownMenu **Type**: boolean
* `noRadius` only on DropdownMenu **Type**: boolean
* `right` only on DropdownMenu **Type**: boolean
* `fullWidth` only on DropdownMenu **Type**: boolean
* `toggle` only on DropdownMenu **Type**: boolean

## License

MIT © Lukas Aichbauer
