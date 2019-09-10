import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../utils';
import { Button } from '../../../packages/styled-button-component';
import { Container } from '../../../packages/styled-container-component';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
} from '../../../packages/styled-popover-component';
import PopoverReadme from '../../../packages/styled-popover-component/README.md';

storiesOf('Popover', module)
  .addParameters({
    readme: { sidebar: PopoverReadme },
  })
  .add('dismissive', Story(() => {
    const [hidden, setHidden] = useState(true);
    const [position, setPosition] = useState([0, 0]);

    return (
      <Container style={{ minHeight: '50vh' }} dFlex alignItemsCenter justifyContentCenter>
        <Button
          danger
          onBlur={() => setHidden(true)}
          onClick={(ev) => {
            setHidden(false);
            setPosition([
              ev.target.offsetTop - ev.target.offsetHeight,
              ev.target.offsetLeft + ev.target.offsetWidth,
            ]);
          }}
        >
          Click to show popover
        </Button>
        <Popover
          hidden={hidden}
          style={{
            top: `${position[0]}px`,
            left: `${position[1]}px`,
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
  }));
