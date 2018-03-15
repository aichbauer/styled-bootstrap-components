# styled-table-component

[![npm](https://img.shields.io/npm/v/styled-table-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-table-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) table component made with [styled-components](https://styled-components.com).

## Table of Contents

* [Documentation](https://aichbauer.github.io/styled-bootstrap-components)
* [Why?](#why)
* [Installation](#installation)
* [Usage](#usage)
* [Properties](#properties)
* [Related](#related)
* [License](#license)

## Why?

This is a modular approach to use [bootstrap](https://getbootstrap.com) components for quick prototypes, as an entrypoint of your own component library, or if you need just one [bootstrap](https://getbootstrap.com) component for your application. To work with ease with any other libary or framework this component is build with [styled-components](https://styled-components.com).

## Installation

```sh
$ npm i styled-table-component -S
```

or

```sh
$ yarn add styled-table-component
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

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
} from 'styled-table-component';

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

Properties which can be added to the component to change the visual appearance. This component uses [styled-system](http://jxnblk.com/styled-system/).

* `hidden` **Type**: boolean
* `right` **Type**: boolean
* `top` **Type**: boolean
* `left` **Type**: boolean
* `bottom` **Type**: boolean
* `m` margin **Type**: string
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
