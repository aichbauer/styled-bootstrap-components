```jsx
export class ModalShowcase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      centered: false,
      longBody: false,
      backdrop: true,
    };
  }

  toggleModal() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  launchSimpleModal() {
    this.setState({
      hidden: false,
      centered: false,
      longBody: false,
      backdrop: true,
    });
  }

  launchCenteredModal() {
    this.setState({
      hidden: false,
      centered: true,
      longBody: false,
      backdrop: true,
    });
  }

  launchLongBodyModal() {
    this.setState({
      hidden: false,
      centered: false,
      longBody: true,
      backdrop: true,
    });
  }

  launchStaticBackdropModal() {
    this.setState({
      hidden: false,
      centered: false,
      longBody: false,
      backdrop: 'static',
    });
  }

  render() {
    const { hidden, centered, longBody, backdrop } = this.state;

    return (
      <Container>
        <Modal
          centered={centered}
          backdrop={backdrop}
          hidden={hidden}
          toggle={() => this.toggleModal()
        }>
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>

            <Button outline onClick={() => this.toggleModal()}>
              <span aria-hidden="true">&times;</span>
            </Button>
          </ModalHeader>

          <ModalBody style={{height: longBody ? '150vh' : ''}}>
            Modal body text goes here.
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => this.toggleModal()}>Close</Button>
          </ModalFooter>
        </Modal>

        <Button block danger onClick={() => this.launchSimpleModal()}>
          Launch Modal
        </Button>

        <Button block danger onClick={() => this.launchCenteredModal()}>
          Launch Centered Modal
        </Button>

        <Button block danger onClick={() => this.launchLongBodyModal()}>
          Launch Long Body Modal
        </Button>

        <Button block danger onClick={() => this.launchStaticBackdropModal()}>
          Launch Modal With Static Backdrop
        </Button>
      </Container>
    );
  }
}
```
