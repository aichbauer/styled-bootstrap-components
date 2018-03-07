# styled-bootstrap-components

> The [bootstrap](https://getbootstrap.com) components made with [styled-components](https://styled-components.com).

## Table of Contents

* [Documentation](https://aichbauer.github.io/react-styled-bootstrap-components)
* [Why?](#why)
* [Installation](#installation)
* [Usage](#Usage)
* [Components](#components)
* [Related](#related)
* [License](#license)

## Why?

I wanted to use [bootstrap](https://getbootstrap.com) with [React](https://reactjs.org/) for **fast prototypes**, or as entrypoint for **my own UI Component Library**, or if I needed just one bootstrap component for my application, now I can simply install that specific component. To work with ease with any other libary or framework this components are build with [styled-components](https://styled-components.com).

I also wanted to learn a bit more on how CSS works and on how to build a CSS UI Library from scratch, mostly but not only by reading the [bootstrap CSS code](https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.css) and the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS). I also wanted to learn how to manage and maintain a monorepo with multiple packages based on [lerna](https://lernajs.io/).

## Installation

You can install all bootstrap components with...

```sh
$ npm i styled-bootstrap-components -S
```

or

```sh
$ yarn add styled-bootstrap-components
```

or you can install just the components that you need by following the installation guides in the [components section](#components).

## Usage

For detailed information (also on how to customize this components) take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

Most of this components are using [styled-system](http://jxnblk.com/styled-system/).

To see which components are available take a look at the [components section](#components).

```jsx
// whatever components you need
import { Button } from 'styled-bootstrap-components';

export const myComponent = (props) => (
  <Button>Hello, World!</Button>
);
```

## Components

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

* [Alert Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-alert-component#readme)
* [Badge Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-badge-component#readme)
* [Base Components](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-base-components#readme)
* [Breadcrumb Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-breadcrumb-component#readme)
* [Button Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-button-component#readme)
* [Card Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-card-component#readme)
* [Container Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-container-component#readme)
* [Dropdown Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-dropdown-component#readme)
* [Form Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-form-component#readme)
* [Grid Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-grid-component#readme)
* [Jumbotron Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-jumbotron-component#readme)
* [Listgroup Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-listgroup-component#readme)
* [Modal Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-modal-component#readme)
* [Nav Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-nav-component#readme)
* [Navbar Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-navbar-component#readme)
* [Popover Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-popover-component#readme)
* [Tooltip Component](https://github.com/aichbauer/styled-bootstrap-components/tree/master/packages/styled-tooltip-component#readme)

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)
* [styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Lukas Aichbauer
