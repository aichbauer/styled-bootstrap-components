```jsx
export class DismissAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }

  handleDismiss() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <Container style={{ textAlign: 'left' }}>
        <Transition noInitialEnter hideOnExit hidden={hidden}>
          <Alert primary dismissible>
            This is a default alert — check it out!
            <span
              style={{
                padding: '15px',
                position: 'absolute',
                cursor: 'pointer',
                right: 0,
                top: '-3px',
              }}
              onClick={() => this.handleDismiss()}
              onKeyPress={() => this.handleDismiss()}
              role="button"
              tabIndex={0}
            >&times;
            </span>
          </Alert>
        </Transition>
      </Container>
    );
  }
};
```
