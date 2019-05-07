import React from 'react';

import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '../../../../packages/styled-modal-component';
import { Container } from '../../../../packages/styled-container-component';
import { Button } from '../../../../packages/styled-button-component';

export class ModalExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    const { hidden } = this.state;

    return (
      <Container>
        <Modal hidden={hidden} toggle={this.toggleModal}>
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>

            <Button outline onClick={this.toggleModal}>
              <span aria-hidden="true">&times;</span>
            </Button>
          </ModalHeader>

          <ModalBody textAlign="left">
            Modal body text goes here.
          </ModalBody>

          <ModalFooter>
            <Button onClick={this.toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>

        <Button block danger onClick={this.toggleModal}>
          Launch Modal
        </Button>
      </Container>
    );
  }
}
