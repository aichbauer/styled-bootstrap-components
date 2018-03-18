import React from 'react';

import { Button } from '../../../../packages/styled-button-component';
import { Container } from '../../../../packages/styled-container-component';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from '../../../../packages/styled-dropdown-component';

export class ContextualVariationsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenPrimary: true,
      hiddenSecondary: true,
      hiddenSuccess: true,
      hiddenInfo: true,
      hiddenWarning: true,
      hiddenDanger: true,
      hiddenLight: true,
      hiddenDark: true,
    };
  }

  handleOpenCloseDropdown(dropdownHidden) {
    this.setState({
      [dropdownHidden]: !this.state[dropdownHidden],
    });
  }

  render() {
    const {
      hiddenDanger,
      hiddenDark,
      hiddenInfo,
      hiddenLight,
      hiddenPrimary,
      hiddenSecondary,
      hiddenSuccess,
      hiddenWarning,
    } = this.state;
    return (
      <Container style={{ textAlign: 'left' }}>
        <Dropdown mb="0.5rem">
          <Button primary dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenPrimary')}>
            Primary
          </Button>
          <DropdownMenu hidden={hiddenPrimary}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown mb="0.5rem">
          <Button secondary dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenSecondary')}>
            Secondary
          </Button>
          <DropdownMenu hidden={hiddenSecondary}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown mb="0.5rem">
          <Button success dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenSuccess')}>
            Success
          </Button>
          <DropdownMenu hidden={hiddenSuccess}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown mb="0.5rem">
          <Button info dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenInfo')}>
            Info
          </Button>
          <DropdownMenu hidden={hiddenInfo}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown mb="0.5rem">
          <Button warning dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenWarning')}>
            Warning
          </Button>
          <DropdownMenu hidden={hiddenWarning}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown mb="0.5rem">
          <Button danger dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenDanger')}>
            Danger
          </Button>
          <DropdownMenu hidden={hiddenDanger}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown mb="0.5rem">
          <Button light dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenLight')}>
            Light
          </Button>
          <DropdownMenu hidden={hiddenLight}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown mb="0.5rem">
          <Button dark dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenDark')}>
            Dark
          </Button>
          <DropdownMenu hidden={hiddenDark}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Container>
    );
  }
}
