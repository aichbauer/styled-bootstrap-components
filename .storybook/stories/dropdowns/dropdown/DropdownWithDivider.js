import React from 'react';

import { Button } from '../../../../packages/styled-button-component';
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
} from '../../../../packages/styled-dropdown-component';

export class DropdownWithDivider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  handleOpenCloseDropdown() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <Dropdown>
        <Button
          secondary
          dropdownToggle
          onClick={() => this.handleOpenCloseDropdown()}
        >
          Dropdown Button
        </Button>
        <DropdownMenu hidden={hidden} toggle={() => this.handleOpenCloseDropdown()}>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Seperated link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
