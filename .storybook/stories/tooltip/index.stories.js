import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../utils';
import { Container } from '../../../packages/styled-container-component';
import { Button } from '../../../packages/styled-button-component';
import {
  Tooltip,
  TooltipArrow,
  TooltipInner,
} from '../../../packages/styled-tooltip-component';
import TooltipReadme from '../../../packages/styled-tooltip-component/README.md';

storiesOf('Tooltip', module)
  .addParameters({
    readme: { sidebar: TooltipReadme },
  })
  .add('simple', Story(() => {
    const [hidden, setHidden] = useState(true);
    const [position, setPosition] = useState([0, 0]);

    return (
      <Container style={{ minHeight: '50vh' }} dFlex alignItemsCenter justifyContentCenter>
        <Button
          danger
          onMouseLeave={() => setHidden(true)}
          onMouseEnter={(ev) => {
            setHidden(false);
            setPosition([
              ev.target.offsetTop + 5,
              ev.target.offsetLeft + ev.target.offsetWidth,
            ]);
          }}
        >
          Hover to toggle tooltip
        </Button>
        <Tooltip
          hidden={hidden}
          style={{
            top: `${position[0]}px`,
            left: `${position[1]}px`,
          }}
          right
        >
          <TooltipArrow right />
          <TooltipInner right>Tooltip Title</TooltipInner>
        </Tooltip>
      </Container>
    );
  }));
