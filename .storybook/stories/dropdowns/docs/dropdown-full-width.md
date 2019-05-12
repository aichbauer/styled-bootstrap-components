```jsx
export class DropdownFullWidth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
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
        <Button dropdownToggle onClick={() => this.handleOpenCloseDropdown()}>
          Long Long Long Long Long Long Long Button
        </Button>
        <DropdownMenu fullWidth hidden={hidden} toggle={() => this.handleOpenCloseDropdown()}>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
};
```
