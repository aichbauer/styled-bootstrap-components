# styled-navbar-component

[![npm](https://img.shields.io/npm/v/styled-navbar-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-navbar-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) navbar component made with [styled-components](https://styled-components.com).

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
$ npm i styled-navbar-component -S
```

or

```sh
$ yarn add styled-navbar-component
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

To use HTML that uses the Boostrap style, use [styled-base-components](https://github.com/aichbauer/styled-bootstrap-components/blob/master/packages/styled-base-components/README.md).

> Note: if you want this example to work you need to install `styled-container-component`, `styled-button-component`, and `styled-nav-component` as well

```jsx
import React from 'react';

/*
  if you installed `styled-bootstrap-components` use

    import { ... } from 'styled-bootstrap-components'

  instead.
*/
import { Container } from 'styled-container-component';
import { Button } from 'styled-button-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';

export class NavbarLight extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hidden: true,
    };
  }

  handleOpenCloseNav() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <Container fluid>
        <Container fluid>
          <Navbar expandSm light>
            <Nav start>
              <NavbarLink light brand href="#">BRAND</NavbarLink>
              <Button
                light
                outline
                toggleCollapse
                expandSm
                onClick={() => this.handleOpenCloseNav()}
              >
                <span>&#9776;</span>
              </Button>
            </Nav>
            <Nav start collapse expandSm hidden={hidden}>
              <NavbarLink light active href="#">Active</NavbarLink>
              <NavbarLink light href="#">Link</NavbarLink>
              <NavbarLink light href="#">Link</NavbarLink>
              <NavbarLink light disabled href="#">Disabled</NavbarLink>
            </Nav>
          </Navbar>
        </Container>
      </Container>
    );
  }
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

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)

## License

MIT © Lukas Aichbauer
