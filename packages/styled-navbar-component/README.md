# styled-navbar-component

[![npm](https://img.shields.io/npm/v/styled-navbar-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-navbar-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) navbar component made with [styled-components](https://styled-components.com).

This is a modular approach to use [bootstrap](https://getbootstrap.com)
components for quick prototypes, as an entrypoint of your own component
library, or if you need just one bootstrap component for your application.

## Installation

```sh
npm install --save styled-navbar-component
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

> This example uses `styled-button-component` package

```jsx
import React from 'react';

import { Container } from 'styled-container-component';
import { Button } from 'styled-button-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';

export const NavbarLight = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <Navbar expandSm light>
      <Nav start>
        <NavbarLink light brand href="#">BRAND</NavbarLink>
        <Nav end>
          <Button
            light
            outline
            toggleCollapse
            expandSm
            onClick={() => setHidden(!hidden)}
          >
            <span>&#9776;</span>
          </Button>
        </Nav>
      </Nav>
      <Nav start collapse expandSm hidden={hidden}>
        <NavbarLink light active>Active</NavbarLink>
        <NavbarLink light href="#">Link</NavbarLink>
        <NavbarLink light href="#">Link</NavbarLink>
        <NavbarLink light disabled href="#">Disabled</NavbarLink>
      </Nav>
    </Navbar>
  );
};
```

Usage with [react-router-dom](https://reacttraining.com/react-router/web/example/basic).

Just wrap the NavbarLink with the `<Link />` component from `react-router-dom`.

```jsx
const myLinkComponent = () => (
  <div>
    <Link to="#">
      <NavbarLink light active>Active</NavbarLink>
    </Link>
    <Link to="#">
      <NavbarLink light>Link</NavbarLink>
    </Link>
    <Link to="#">
      <NavbarLink light>Link</NavbarLink>
    </Link>
    <Link to="#">
      <NavbarLink light disabled>Disabled</NavbarLink>
    </Link>
  </div>
);
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `light` **Type**: boolean
* `dark` **Type**: boolean
* `expandSm` only on Navbar **Type**: boolean
* `expandMd` only on Navbar **Type**: boolean
* `expandLg` only on Navbar **Type**: boolean
* `expandXl` only on Navbar **Type**: boolean
* `brand` only on NavbarLink **Type**: boolean

## License

MIT © Lukas Aichbauer
