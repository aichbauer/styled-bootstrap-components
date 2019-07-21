import React from 'react';

import { Container } from '../../../../packages/styled-container-component';
import { Button } from '../../../../packages/styled-button-component';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
} from '../../../../packages/styled-popover-component';

export class DismissivePopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      left: 0,
      hidden: true,
    };
  }

  showPopover(ev) {
    this.setState({
      top: ev.target.offsetTop - ev.target.offsetHeight,
      left: ev.target.offsetLeft + ev.target.offsetWidth,
      hidden: false,
    });
  }

  hidePopover(ev) {
    this.setState({
      hidden: true,
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
          onClick={(ev) => this.showPopover(ev)}
          onBlur={(ev) => this.hidePopover(ev)}
        >
          Click to show popover
        </Button>
        <Popover
          hidden={hidden}
          style={{
            top: `${top}px`,
            left: `${left}px`,
          }}
          right
        >
          <PopoverArrow right />
          <PopoverHeader right>Popover Title</PopoverHeader>
          <PopoverBody right>
            And here&#39;s some amazing content.
            It&#39;s very engaging. Right?
          </PopoverBody>
        </Popover>
      </Container>
    );
  }
}
