import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../utils';
import { Badge } from '../../../packages/styled-badge-component';
import { Button } from '../../../packages/styled-button-component';
import { Div } from '../../../packages/styled-base-components';

storiesOf('Badge', module)
  .add('in headings', () => (
    <React.Fragment>
      <h1>Example heading <Badge primary>New</Badge></h1>
      <h2>Example heading <Badge primary>New</Badge></h2>
      <h3>Example heading <Badge primary>New</Badge></h3>
      <h4>Example heading <Badge primary>New</Badge></h4>
      <h5>Example heading <Badge primary>New</Badge></h5>
      <h6>Example heading <Badge primary>New</Badge></h6>
    </React.Fragment>
  ))
  .add('in buttons', () => (
    <React.Fragment>
      <Button block primary>Notifications <Badge light>4</Badge></Button>
      <Button block dark>Notifications <Badge light>4</Badge></Button>
      <div style={{backgroundColor: "#aaaaaa", padding: "0.5rem", marginTop: "0.5rem"}}>
        <Button block light >Notifications <Badge dark>4</Badge></Button>
      </div>
    </React.Fragment>
  ))
  .add('colored', () => (
    <React.Fragment>
      <Badge primary>Primary</Badge><br />
      <Badge secondary>Secondary</Badge><br />
      <Badge success>Success</Badge><br />
      <Badge danger>Danger</Badge><br />
      <Badge warning>Warning</Badge><br />
      <Badge info>Info</Badge><br />
      <Badge light>Light</Badge><br />
      <Badge dark>Dark</Badge>
    </React.Fragment>
  ))
  .add('as pills', () => (
    <React.Fragment>
      <Badge pill primary>Primary</Badge><br />
      <Badge pill secondary>Secondary</Badge><br />
      <Badge pill success>Success</Badge><br />
      <Badge pill danger>Danger</Badge><br />
      <Badge pill warning>Warning</Badge><br />
      <Badge pill info>Info</Badge><br />
      <Badge pill light>Light</Badge><br />
      <Badge pill dark>Dark</Badge><br />
    </React.Fragment>
  ));