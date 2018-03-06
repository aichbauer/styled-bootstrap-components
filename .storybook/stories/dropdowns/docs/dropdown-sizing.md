```jsx
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
          <Dropdown>
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
          <Dropdown>
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
          <Dropdown>
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
          <Dropdown>
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
};
```
