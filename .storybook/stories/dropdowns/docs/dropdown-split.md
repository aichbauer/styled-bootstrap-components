```jsx
export class DropdownSplit extends React.Component {
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
        <ButtonGroup>
          <Button secondary>
            Large button
          </Button>
          <Button secondary dropdownToggle split onClick={() => this.handleOpenCloseDropdown()} />
        </ButtonGroup>
        <DropdownMenu hidden={hidden} toggle={() => this.handleOpenCloseDropdown()}>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
};
```
