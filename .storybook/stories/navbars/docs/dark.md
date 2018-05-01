```jsx
export class NavbarDark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  handleOpenCloseNav() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <Container fluid>
        <Navbar expandSm dark>
          <Nav start>
            <NavbarLink dark brand href="#">BRAND</NavbarLink>
            <Nav end>
              <Button
                dark
                outline
                toggleCollapse
                expandSm
                onClick={() => this.handleOpenCloseNav()}
              >
                <span>&#9776;</span>
              </Button>
            </Nav>
          </Nav>
          <Nav start collapse expandSm hidden={hidden}>
            <NavbarLink dark active href="#">Active</NavbarLink>
            <NavbarLink dark href="#">Link</NavbarLink>
            <NavbarLink dark href="#">Link</NavbarLink>
            <NavbarLink dark disabled href="#">Disabled</NavbarLink>
          </Nav>
        </Navbar>
      </Container>
    );
  }
};
```
