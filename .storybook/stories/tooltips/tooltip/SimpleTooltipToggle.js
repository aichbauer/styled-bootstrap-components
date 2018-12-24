import React from 'react';

import { Container } from '../../../../packages/styled-container-component';
import { Button } from '../../../../packages/styled-button-component';
import {
  Tooltip,
  TooltipArrow,
  TooltipInner,
} from '../../../../packages/styled-tooltip-component';

export class SimpleTooltipToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      left: 0,
      hidden: false,
    };
  }

  handleTooltip(ev, hidden) {
    this.setState({
      top: ev.target.offsetTop + 5,
      left: ev.target.offsetLeft + ev.target.offsetWidth,
      hidden,
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
          onMouseEnter={(ev) => this.handleTooltip(ev, false)}
          onMouseLeave={(ev) => this.handleTooltip(ev, true)}
        >
          Hover to toggle tooltip
        </Button>
        <Tooltip
          hidden={hidden}
          style={{
            top: `${top}px`,
            left: `${left}px`,
          }}
          right
        >
          <TooltipArrow right />
          <TooltipInner right>Tooltip Title</TooltipInner>
        </Tooltip>
      </Container>
    );
  }
}
