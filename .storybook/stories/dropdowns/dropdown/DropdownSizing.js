import React from 'react';

import { Button, ButtonGroup } from '../../../../packages/styled-button-component';
import { Container } from '../../../../packages/styled-container-component';
import { Row } from '../../../../packages/styled-grid-system-component';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from '../../../../packages/styled-dropdown-component';

export class DropdownSizing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenBig: true,
      hiddenBigSplit: true,
      hiddenSmall: true,
      hiddenSmallSplit: true,
    };
  }

  handleOpenCloseDropdown(dropdownHidden) {
    this.setState({
      [dropdownHidden]: !this.state[dropdownHidden],
    });
  }

  render() {
    const {
      hiddenBig,
      hiddenBigSplit,
      hiddenSmall,
      hiddenSmallSplit,
    } = this.state;
    return (
      <Container style={{ textAlign: 'left' }}>
        <Row>
          <Dropdown mb="0.5rem">
            <Button secondary lg dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenBig')}>
              Large button
            </Button>
            <DropdownMenu hidden={hiddenBig}>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Row>
        <Row>
          <Dropdown mb="0.5rem">
            <ButtonGroup lg>
              <Button secondary>
                Large button
              </Button>
              <Button secondary lg dropdownToggle split onClick={() => this.handleOpenCloseDropdown('hiddenBigSplit')} />
            </ButtonGroup>
            <DropdownMenu hidden={hiddenBigSplit}>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Row>
        <Row>
          <Dropdown mb="0.5rem">
            <Button secondary sm dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenSmall')}>
              Small button
            </Button>
            <DropdownMenu hidden={hiddenSmall}>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Row>
        <Row>
          <Dropdown mb="0.5rem">
            <ButtonGroup sm>
              <Button secondary>
                Small button
              </Button>
              <Button secondary sm dropdownToggle split onClick={() => this.handleOpenCloseDropdown('hiddenSmallSplit')} />
            </ButtonGroup>
            <DropdownMenu hidden={hiddenSmallSplit}>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Row>
      </Container>
    );
  }
}
