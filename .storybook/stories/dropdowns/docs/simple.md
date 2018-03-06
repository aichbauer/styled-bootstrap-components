```jsx
export class SimpleDropdown extends React.Component {
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
      <Container style={{ textAlign: 'left' }}>
        <Dropdown>
          <Button 
            secondary 
            dropdownToggle 
            onClick={() => this.handleOpenCloseDropdown()}
          >
            Dropdown Button
          </Button>
          <DropdownMenu hidden={hidden}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Container>
    );
  }
};
```
