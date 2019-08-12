# styled-tooltip-component

[![npm](https://img.shields.io/npm/v/styled-tooltip-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-tooltip-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) tooltip component made with [styled-components](https://styled-components.com).

This is a modular approach to use [bootstrap](https://getbootstrap.com)
components for quick prototypes, as an entrypoint of your own component
library, or if you need just one bootstrap component for your application.

## Installation

> Note: this component has a peer dependency on `styled-components` > v4. To use this component you also need to `npm i styled-components -S`.

```sh
npm install --save styled-tooltip-component
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

> Note: if you want this example to work you need to install `styled-container-component`, and  `styled-button-component`as well, but you do not need them to work properly

> This example uses `styled-button-component` package

```jsx
import React, { useState } from 'react';

import { Button } from 'styled-button-component';
import {
  Tooltip,
  TooltipArrow,
  TooltipInner,
} from 'styled-tooltip-component';

export const SimpleTooltipToggle = () => {
  const [hidden, setHidden] = useState(true);
  const [position, setPosition] = useState([0, 0]);

  return (
    <Container style={{ minHeight: '50vh' }} dFlex alignItemsCenter justifyContentCenter>
      <Button
        danger
        onMouseLeave={() => setHidden(true)}
        onMouseEnter={(ev) => {
          setHidden(false);
          setPosition([
            ev.target.offsetTop + 5,
            ev.target.offsetLeft + ev.target.offsetWidth,
          ]);
        }}
      >
        Hover to toggle tooltip
      </Button>
      <Tooltip
        hidden={hidden}
        style={{
          top: `${position[0]}px`,
          left: `${position[1]}px`,
        }}
        right
      >
        <TooltipArrow right />
        <TooltipInner right>Tooltip Title</TooltipInner>
      </Tooltip>
    </Container>
  );
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
* `transitionProps` **Type:**: object

## License

MIT © Lukas Aichbauer
