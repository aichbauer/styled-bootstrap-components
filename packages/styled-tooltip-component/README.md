# styled-tooltip-component

[![npm](https://img.shields.io/npm/v/styled-tooltip-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-tooltip-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) tooltip component made with [styled-components](https://styled-components.com).

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
$ npm i styled-tooltip-component -S
```

or

```sh
$ yarn add styled-tooltip-component
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

To use HTML that uses the Boostrap style, use [styled-base-components](https://github.com/aichbauer/styled-bootstrap-components/blob/master/packages/styled-base-components/README.md).

> Note: if you want this example to work you need to install `styled-container-component`, and  `styled-button-component`as well, but you do not need them to work properly

```jsx
import React from 'react';

/*
  if you installed `styled-bootstrap-components` use

    import { ... } from 'styled-bootstrap-components'

  instead.
*/
import { Container } from 'styled-container-component';
import { Button } from 'styled-button-component';
import {
  Tooltip,
  TooltipArrow,
  TooltipInner,
} from 'styled-tooltip-component';

export class SimpleTooltipToggle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      top: 0,
      left: 0,
      hidden: true,
    };
  }

  handleTooltip(ev, hidden) {
    this.setState({
      top: ev.target.offsetTop + 5,
      left: ev.target.offsetLeft + ev.target.offsetWidth,
      hidden,
    });
  }

  render() {
    const {
      top,
      left,
      hidden,
    } = this.state;
    return (
      <Container>
        <Button
          danger
          onMouseEnter={(ev) => this.handleTooltip(ev, false)}
          onMouseLeave={(ev) => this.handleTooltip(ev, true)}
        >
          Click to toggle popover
        </Button>
        <Tooltip
          hidden={hidden}
          style={{
            top: `${top}px`,
            left: `${left}px`
          }}
          right
        >
          <TooltipArrow right />
          <TooltipInner right>Tooltip Title</TooltipInner>
        </Tooltip>
      </Container>
    );
  }
};
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `pill` only on TooltipInner **Type**: boolean
* `noRadius` only on TooltipInner **Type**: boolean
* `hidden` **Type**: boolean
* `right` **Type**: boolean
* `top` **Type**: boolean
* `left` **Type**: boolean
* `bottom` **Type**: boolean

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)

## License

MIT © Lukas Aichbauer
