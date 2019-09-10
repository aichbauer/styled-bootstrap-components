# styled-popover-component

[![npm](https://img.shields.io/npm/v/styled-popover-component.svg?style=flat-square)](https://www.npmjs.com/package/styled-popover-component)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) popover component made with [styled-components](https://styled-components.com).

This is a modular approach to use [bootstrap](https://getbootstrap.com) components for quick prototypes, as an entrypoint of your own component library, or if you need just one [bootstrap](https://getbootstrap.com) component for your application.

## Installation

```sh
npm install --save styled-popover-component
npm install --save styled-components@^4.1.3 react@^16.7.0 # Peer dependencies
```

## Usage

For detailed information take a look at the [documentation](https://aichbauer.github.io/styled-bootstrap-components).

> This example uses `styled-button-component` package

```jsx
import React, { useState } from 'react';

import { Button } from 'styled-button-component';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
} from 'styled-popover-component';

export const SimplePopoverToggle = () => {
  const [hidden, setHidden] = useState(true);
  const [position, setPosition] = useState([0, 0]);

  return (
    <div style={{ minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
      <Button
        danger
        onBlur={() => setHidden(true)}
        onClick={(ev) => {
          setHidden(false);
          setPosition([
            ev.target.offsetTop - ev.target.offsetHeight,
            ev.target.offsetLeft + ev.target.offsetWidth,
          ]);
        }}
      >
        Click to show popover
      </Button>
      <Popover
        hidden={hidden}
        style={{
          top: `${position[0]}px`,
          left: `${position[1]}px`,
        }}
        right
      >
        <PopoverArrow right />
        <PopoverHeader right>Popover Title</PopoverHeader>
        <PopoverBody right>
          And here&#39;s some amazing content.
          It&#39;s very engaging. Right?
        </PopoverBody>
      </Popover>
    </div>
  );
};
```

## Properties

Properties which can be added to the component to change the visual appearance.

* `hidden` **Type**: boolean
* `right` **Type**: boolean
* `top` **Type**: boolean
* `left` **Type**: boolean
* `bottom` **Type**: boolean
* `transitionProps` **Type**: object
*
## License

MIT © Lukas Aichbauer
