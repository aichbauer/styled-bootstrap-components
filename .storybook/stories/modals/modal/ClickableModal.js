import React from 'react';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '../../../../packages/styled-modal-component';
import { Container } from '../../../../packages/styled-container-component';
import { Button } from '../../../../packages/styled-button-component';
import { P } from '../../../../packages/styled-base-components';

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
              <ModalBody textAlign="left">
                <P>
                Modal body text goes here.
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
        <Button danger onClick={() => this.handleModal()} >
          Launch Modal
        </Button>
      </Container>
    );
  }
}
