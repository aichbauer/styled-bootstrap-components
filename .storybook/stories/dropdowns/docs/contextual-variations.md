```jsx
export class ContextualVariationsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenDefault: true,
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
      hiddenDefault,
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
        <Dropdown>
          <Button primary dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenPrimary')}>
            Primary
          </Button>
          <DropdownMenu hidden={hiddenPrimary}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <Button secondary dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenSecondary')}>
            Secondary
          </Button>
          <DropdownMenu hidden={hiddenSecondary}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <Button success dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenSuccess')}>
            Success
          </Button>
          <DropdownMenu hidden={hiddenSuccess}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <Button info dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenInfo')}>
            Info
          </Button>
          <DropdownMenu hidden={hiddenInfo}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <Button warning dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenWarning')}>
            Warning
          </Button>
          <DropdownMenu hidden={hiddenWarning}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <Button danger dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenDanger')}>
            Danger
          </Button>
          <DropdownMenu hidden={hiddenDanger}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <Button light dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenLight')}>
            Light
          </Button>
          <DropdownMenu hidden={hiddenLight}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
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
};
```
