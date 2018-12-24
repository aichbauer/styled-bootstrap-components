import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../../../packages/styled-button-component';
import { theme } from '../../../../packages/styled-config';

export const Simple = (props) => (
  <div>
    <ThemeProvider theme={{
      theme,
      button: {
        ...theme.button,
        colors: {
          ...theme.button.colors,
          primary: {
            color: 'white',
            backgroundColor: 'green',
            backgroundColorHoverFocus: 'lightgreen',
          },
        },
      },
    }}>
      <Button primary>
        Simple
    </Button>
    </ThemeProvider>
  </div>
);
