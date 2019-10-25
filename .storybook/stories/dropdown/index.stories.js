import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../utils';
import { Button, ButtonGroup } from '../../../packages/styled-button-component';
import { Transition } from '../../../packages/styled-base-components';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownDivider,
} from '../../../packages/styled-dropdown-component';
import DropdownReadme from '../../../packages/styled-dropdown-component/README.md';

storiesOf('Dropdown', module)
  .addParameters({
    readme: { sidebar: DropdownReadme },
  })
  .add('simple', Story(() => {
    const [hidden, setHidden] = useState(true);

    return (
      <Dropdown>
        <Button dropdownToggle onClick={() => setHidden(!hidden)}>
          Dropdown Button
        </Button>
        <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Action after divider</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }))
  .add('contextual', Story(() => {
    const makeDropdown = (mod) => {
      const [hidden, setHidden] = useState(true);

      return (
        <Dropdown mr2>
          <Button dropdownToggle onClick={() => setHidden(!hidden)} {...{ [mod]: true }}>
            {mod.charAt(0).toUpperCase() + mod.slice(1)}
          </Button>
          <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    };

    return (
      <>
        {makeDropdown('primary')}
        {makeDropdown('secondary')}
        {makeDropdown('success')}
        {makeDropdown('info')}
        {makeDropdown('warning')}
        {makeDropdown('danger')}
        {makeDropdown('light')}
        {makeDropdown('dark')}
      </>
    );
  }))
  .add('with split', Story(() => {
    const [hidden, setHidden] = useState(true);

    return (
      <Dropdown>
        <ButtonGroup>
          <Button>Button</Button>
          <Button split dropdownToggle onClick={() => setHidden(!hidden)} />
        </ButtonGroup>
        <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Seperated link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }))
  .add('right alignment', Story(() => {
    const [hidden, setHidden] = useState(true);

    return (
      <Dropdown>
        <Button dropdownToggle onClick={() => setHidden(!hidden)}>
          Very very very very long dropdown button
        </Button>
        <DropdownMenu right hidden={hidden} toggle={() => setHidden(!hidden)}>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Seperated link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }))
  .add('full width', Story(() => {
    const [hidden, setHidden] = useState(true);

    return (
      <Dropdown>
        <Button dropdownToggle onClick={() => setHidden(!hidden)}>
          Very very very very long dropdown button
        </Button>
        <DropdownMenu fullWidth hidden={hidden} toggle={() => setHidden(!hidden)}>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Seperated link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }))
  .add('animated', Story(() => {
    const [hidden, setHidden] = useState(true);

    return (
      <Dropdown>
        <Button dropdownToggle onClick={() => setHidden(!hidden)}>
          Dropdown button
        </Button>
        <Transition hidden={hidden}>
          <DropdownMenu alwaysVisible hidden={hidden} toggle={() => setHidden(!hidden)}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Seperated link</DropdownItem>
          </DropdownMenu>
        </Transition>
      </Dropdown>
    );
  }));
