import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../utils';
import { Alert } from '../../../packages/styled-alert-component';
import AlertReadme from '../../../packages/styled-alert-component/README.md';
import { Transition } from '../../../packages/styled-base-components';

storiesOf('Alert', module)
  .addParameters({
    readme: { sidebar: AlertReadme },
  })
  .add('simple', () => (
    <Alert primary>Hello World</Alert>
  ))
  .add('contextual', () => (
    <div>
      <Alert primary>Primary alert</Alert>
      <Alert secondary>Secondary alert</Alert>
      <Alert success>Success alert</Alert>
      <Alert danger>Danger alert</Alert>
      <Alert warning>Warning alert</Alert>
      <Alert info>Info alert</Alert>
      <Alert light>Light alert</Alert>
      <Alert dark>Dark alert</Alert>
    </div>
  ))
  .add('dismissible', Story(() => {
    const [hidden, setHidden] = useState(false);

    return (
      <Transition noInitialEnter hideOnExit hidden={hidden}>
        <Alert>
          Hello World
          <span style={{ float: 'right', cursor: 'pointer' }} onClick={() => setHidden(true)}>
            &#10006;
          </span>
        </Alert>
      </Transition>
    );
  }));
