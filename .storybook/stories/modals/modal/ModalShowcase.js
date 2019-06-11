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

export class ModalShowcase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      centered: false,
      longBody: false,
      backdrop: true,
      backdropColor: "",
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
      backdropColor: "",
    });
  }

  launchCenteredModal() {
    this.setState({
      hidden: false,
      centered: true,
      longBody: false,
      backdrop: true,
      backdropColor: "",
    });
  }

  launchLongBodyModal() {
    this.setState({
      hidden: false,
      centered: false,
      longBody: true,
      backdrop: true,
      backdropColor: "",
    });
  }

  launchStaticBackdropModal() {
    this.setState({
      hidden: false,
      centered: false,
      longBody: false,
      backdrop: 'static',
      backdropColor: "",
    });
  }

  launchColoredBackdropModal() {
    this.setState({
      hidden: false,
      centered: false,
      longBody: false,
      backdrop: true,
      backdropColor: "#2ecc40",
    });
  }

  render() {
    const { hidden, centered, longBody, backdrop, backdropColor } = this.state;

    return (
      <Container>
        <Modal
          centered={centered}
          backdrop={backdrop}
          backdropProps={{style: { backgroundColor: backdropColor }}}
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

        <Button block danger onClick={() => this.launchColoredBackdropModal()}>
          Launch Modal With Colored Backdrop
        </Button>
      </Container>
    );
  }
}
