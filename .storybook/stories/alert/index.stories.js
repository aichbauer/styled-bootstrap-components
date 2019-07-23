import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../utils';
import { Alert } from '../../../packages/styled-alert-component';
import { Transition } from '../../../packages/styled-base-components';

storiesOf('Alert', module)
  .add('with text', () => (
    <Alert primary>Hello World</Alert>
  ))
  .add('colored', () => (
    <React.Fragment>
      <Alert primary>Primary alert</Alert>
      <Alert secondary>Secondary alert</Alert>
      <Alert success>Success alert</Alert>
      <Alert danger>Danger alert</Alert>
      <Alert warning>Warning alert</Alert>
      <Alert info>Info alert</Alert>
      <Alert light>Light alert</Alert>
      <Alert dark>Dark alert</Alert>
    </React.Fragment>
  ))
  .add('dismissible', Story(() => {
    const [hidden, setHidden] = useState(false);

    return (
      <Transition noInitialEnter hideOnExit hidden={hidden}>
        <Alert>
          Hello World
          <span style={{float: 'right', cursor: 'pointer'}} onClick={() => setHidden(true)}>
            &#10006;
          </span>
        </Alert>
      </Transition>
    );
  }));