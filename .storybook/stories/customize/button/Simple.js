import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../../../packages/styled-button-component';

export const Simple = (props) => (
  <div>
    <Button block primary>Default primary button</Button>
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
  </div>
);
