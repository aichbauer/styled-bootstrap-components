```jsx
export class SimplePopoverToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      left: 0,
      hidden: true,
    };
  }

  handlePopover(ev) {
    this.setState({
      top: ev.target.offsetTop - ev.target.offsetHeight,
      left: ev.target.offsetLeft + ev.target.offsetWidth,
      hidden: !this.state.hidden,
    });
  }

  render() {
    const {
      top,
      left,
      hidden,
    } = this.state;
    return (
      <Container>
        <Button
          danger
          onClick={(ev) => this.handlePopover(ev)}
        >
          Click to toggle popover
        </Button>
        <Popover
          hidden={hidden}
          style={{
            top: `${top}px`,
            left: `${left}px`
          }}
          right
        >
          <PopoverArrow right />
          <PopoverHeader right>Popover Title</PopoverHeader>
          <PopoverBody right>And here's some amazing content. It's very engaging. Right?</PopoverBody>
        </Popover>
      </Container>
    );
  }
};
```
