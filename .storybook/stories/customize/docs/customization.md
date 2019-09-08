# Customize

> Create **your own UI Component Library** on top of `styled-bootstrap-components`

Use the components as an entry point for your library or add themes to
your projects.

## Using styled-components

You can change appearance of styled-components as normal.

```jsx
import styled from 'styled-components';
import { Button } from 'styled-bootstrap-components';

const CustomizedButton = styled(Button)`
      border-radius: 0;
      width: 128px;
`;
```

## Using a theme

You can use 'ThemeProvider' from 'styled-components' to modify the components'
look. Theme provided to components directly or through provider can contain
values that should override default ones.

```jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../../../packages/styled-button-component';

const App = () => (
  <ThemeProvider theme={{
    button: {
      colors: {
        primary: {
          color: '#001919',
        },
      },
    },
  }}>
    <Button block primary>Themed primary button</Button>
  </ThemeProvider>
)
```

You can change `colorScheme` object in theme to influence the whole
library's look.

```jsx
const App = () => (
  <ThemeProvider theme={{
    colorScheme: {
      primaryLight: '#a1bfff',
      primaryLighter: '#6e9cff',
      primary: '#548bff',
      primaryDarker: '#3b7aff',
      primaryDark: '#2168ff',
      primaryDarkest: '#0757ff',
    },
  }}>
    <div>
      <Button block primary mb2>Themed primary button</Button>
      <Alert block primary mb2>Themed primary alert</Alert>
      <Container bgPrimary p2>Themed primary container</Container>
    </div>
  </ThemeProvider>
)
```

Values in config can be plain strings to use in styles or function that
accepts the single argument - function for getting value from the current
theme. If the value is function, it's return value will be used in styles.

```jsx
// Part of default theme demonstrating usage of 'functional' values in the
// configuration. This can be used to reference other values.

const defaultTheme = {
  // ...

  button: {
    colors: {
      primary: {
        color: (get) => get('colorScheme', 'white'),
        colorOutline: (get) => get('colorScheme', 'primary'),
        colorOutlineHover: (get) => get('colorScheme', 'white'),
        backgroundColor: (get) => get('colorScheme', 'primary'),
        backgroundColorDisabled: (get) => get('colorScheme', 'primary'),
        backgroundColorHoverFocus: (get) => get('colorScheme', 'primaryDarker'),
        backgroundColorActive: (get) => get('colorScheme', 'primaryDark'),
        borderColor: (get) => get('colorScheme', 'primary'),
        borderColorDisabled: (get) => get('colorScheme', 'primary'),
        borderColorHoverFocus: (get) => get('colorScheme', 'primaryDark'),
        borderColorActive: (get) => get('colorScheme', 'primaryDark'),
        boxShadow: (get) => get('colorScheme', 'primaryBoxShadow'),
      },
    },
  },

  // ...
}
```
