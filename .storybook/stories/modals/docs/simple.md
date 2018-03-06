```jsx
export class ClickableModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  handleModal() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <Container>
        <Modal hidden={hidden}>
          <ModalDialog>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>
                  Modal Title
              </ModalTitle>
              <Button outline onClick={() => this.handleModal()}>
                <span aria-hidden="true">&times;</span>
              </Button>
              </ModalHeader>
              <ModalBody>
                <P>
                  Modal Body
                </P>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => this.handleModal()}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </ModalDialog>
        </Modal>
        <Button onClick={() => this.handleModal()} >
          Launch Modal
        </Button>
      </Container>
    );
  }
};
```
