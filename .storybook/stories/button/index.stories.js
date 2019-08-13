import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, LinkButton } from '../../../packages/styled-button-component';
import ButtonReadme from '../../../packages/styled-button-component/README.md';

storiesOf('Button', module)
  .addParameters({
    readme: { sidebar: ButtonReadme },
  })
  .add('simple', () => (
    <div>
      <Button m1 primary>Primary</Button>
      <Button m1 secondary>Secondary</Button>
      <Button m1 success>Success</Button>
      <Button m1 danger>Danger</Button>
      <Button m1 warning>Warning</Button>
      <Button m1 info>Info</Button>
      <Button m1 light>Light</Button>
      <Button m1 dark>Dark</Button>
    </div>
  ))
  .add('outline', () => (
    <div>
      <Button m1 primary outline>Primary</Button>
      <Button m1 secondary outline>Secondary</Button>
      <Button m1 success outline>Success</Button>
      <Button m1 danger outline>Danger</Button>
      <Button m1 warning outline>Warning</Button>
      <Button m1 info outline>Info</Button>
      <Button m1 light outline>Light</Button>
      <Button m1 dark outline>Dark</Button>
    </div>
  ))
  .add('sizes', () => (
    <div>
      <Button mb2 primary sm>Small button</Button><br />
      <Button mb2 primary>Normal button</Button><br />
      <Button mb2 primary lg>Large button</Button>
    </div>
  ))
  .add('block', () => (
    <div>
      <Button mb2 block primary>Block level button</Button>
      <Button mb2 block secondary>Block level button</Button>
    </div>
  ))
  .add('link', () => (
    <LinkButton primary href="">Link styled as button</LinkButton>
  ))
  .add('active', () => (
    <div>
      <Button mb2 active primary>Active button</Button><br />
      <Button mb2 active secondary>Active button</Button>
    </div>
  ))
  .add('disabled', () => (
    <div>
      <Button mb2 disabled primary>Disabled button</Button><br />
      <Button mb2 disabled secondary>Disabled button</Button>
    </div>
  ));
