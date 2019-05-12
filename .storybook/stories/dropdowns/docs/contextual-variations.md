```jsx
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
      <div>
        <Dropdown style={{ marginRight: "0.5rem" }}>
          <Button primary dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenPrimary')}>
            Primary
          </Button>
          <DropdownMenu hidden={hiddenPrimary} toggle={() => this.handleOpenCloseDropdown('hiddenPrimary')}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown style={{ marginRight: "0.5rem" }}>
          <Button secondary dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenSecondary')}>
            Secondary
          </Button>
          <DropdownMenu hidden={hiddenSecondary} toggle={() => this.handleOpenCloseDropdown('hiddenSecondary')}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown style={{ marginRight: "0.5rem" }}>
          <Button success dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenSuccess')}>
            Success
          </Button>
          <DropdownMenu hidden={hiddenSuccess} toggle={() => this.handleOpenCloseDropdown('hiddenSuccess')}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown style={{ marginRight: "0.5rem" }}>
          <Button info dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenInfo')}>
            Info
          </Button>
          <DropdownMenu hidden={hiddenInfo} toggle={() => this.handleOpenCloseDropdown('hiddenInfo')}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown style={{ marginRight: "0.5rem" }}>
          <Button warning dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenWarning')}>
            Warning
          </Button>
          <DropdownMenu hidden={hiddenWarning} toggle={() => this.handleOpenCloseDropdown('hiddenWarning')}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown style={{ marginRight: "0.5rem" }}>
          <Button danger dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenDanger')}>
            Danger
          </Button>
          <DropdownMenu hidden={hiddenDanger} toggle={() => this.handleOpenCloseDropdown('hiddenDanger')}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown style={{ marginRight: "0.5rem" }}>
          <Button light dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenLight')}>
            Light
          </Button>
          <DropdownMenu hidden={hiddenLight} toggle={() => this.handleOpenCloseDropdown('hiddenLight')}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown style={{ marginRight: "0.5rem" }}>
          <Button dark dropdownToggle onClick={() => this.handleOpenCloseDropdown('hiddenDark')}>
            Dark
          </Button>
          <DropdownMenu hidden={hiddenDark} toggle={() => this.handleOpenCloseDropdown('hiddenDark')}>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
};
```
