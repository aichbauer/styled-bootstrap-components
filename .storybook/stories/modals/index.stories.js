import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../utils';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '../../../packages/styled-modal-component';
import ModalReadme from '../../../packages/styled-modal-component/README.md';
import { Button } from '../../../packages/styled-button-component';

storiesOf('Modal', module)
  .addParameters({
    readme: { sidebar: ModalReadme },
  })
  .add('simple', Story(() => {
    const [hidden, setHidden] = useState(true);

    return (
      <div>
        <Modal hidden={hidden} toggle={() => setHidden(!hidden)}>
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>

            <Button outline onClick={() => setHidden(!hidden)}>
              <span aria-hidden="true">&times;</span>
            </Button>
          </ModalHeader>

          <ModalBody>
            Modal body text goes here.
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => setHidden(!hidden)}>Close</Button>
          </ModalFooter>
        </Modal>

        <Button block danger onClick={() => setHidden(!hidden)}>
          Launch Modal
        </Button>
      </div>
    );
  }))
  .add('centered', Story(() => {
    const [hidden, setHidden] = useState(true);

    return (
      <div>
        <Modal centered hidden={hidden} toggle={() => setHidden(!hidden)}>
          <ModalBody>
            Modal body text goes here
          </ModalBody>
        </Modal>
        <Button block danger onClick={() => setHidden(!hidden)}>
          Launch centered modal
        </Button>
      </div>
    );
  }))
  .add('long body', Story(() => {
    const [hidden, setHidden] = useState(true);

    return (
      <div>
        <Modal hidden={hidden} toggle={() => setHidden(!hidden)}>
          <ModalBody style={{ height: '150vh' }}>
            Modal body text goes here
          </ModalBody>
        </Modal>
        <Button block danger onClick={() => setHidden(!hidden)}>
          Launch modal with long body
        </Button>
      </div>
    );
  }))
  .add('static backdrop', Story(() => {
    const [hidden, setHidden] = useState(true);

    return (
      <div>
        <Modal backdrop="static" hidden={hidden} toggle={() => setHidden(!hidden)}>
          <ModalBody>
            Modal body text goes here
            <Button block onClick={() => setHidden(!hidden)}>
              Close
            </Button>
          </ModalBody>
        </Modal>
        <Button block danger onClick={() => setHidden(!hidden)}>
          Launch modal with static backdrop
        </Button>
      </div>
    );
  }))
  .add('customization', Story(() => {
    const [hidden, setHidden] = useState(true);

    return (
      <div>
        <Modal
          hidden={hidden}
          toggle={() => setHidden(!hidden)}
          backdropProps={{ style: { backgroundColor: '#2ecc40' } }}
        >
          <ModalBody>
            Modal body text goes here
          </ModalBody>
        </Modal>
        <Button block danger onClick={() => setHidden(!hidden)}>
          Launch modal with green backdrop
        </Button>
      </div>
    );
  }));
