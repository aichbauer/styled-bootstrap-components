import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Utilities, Div, Span } from '../../../packages/styled-base-components';
import UtilitiesReadme from '../../../packages/styled-base-components/README.md';

const Display = styled.div`
  padding: .5rem;
  margin-bottom: .5rem;
  background: #98c9e0;

  ${Utilities};
`;

storiesOf('Utilities', module)
  .addParameters({
    readme: { sidebar: UtilitiesReadme },
  })
  .add('colors', () => (
    <div>
      <Display bgLight textDark>Light background and dark text color</Display>
      <Display bgDark textLight>Dark background and light text color</Display>
      <Display bgDanger textLight>Danger background with light text</Display>
      <Display bgInfo>Info background</Display>
    </div>
  ))
  .add('spacing', () => (
    <div>
      <Display p0>No padding</Display>
      <Display p2>Padding with 2 spacers</Display>
      <Display py6>Vertical padding with 6 spacers (6 * 0.25rem)</Display>
      <Display px6>Horizontal padding with 6 spacers (6 * 0.25rem)</Display>
    </div>
  ))
  .add('adaptive spacing', () => (
    <div>
      <Display p1 pSm2 pMd4 pLg6 pXl8>Different paddings on different breakpoints</Display>
    </div>
  ))
  .add('shadows', () => (
    <div>
      <Display mb4 shadowNone>No shadow</Display>
      <Display mb4 shadowSmall>Small shadow</Display>
      <Display mb4 shadow>Normal shadow</Display>
      <Display mb4 shadowLarge>Large shadow</Display>
    </div>
  ))
  .add('float', () => (
    <Display>
      <Div bgLight floatLeft p1 mr1>left 1</Div>
      <Div bgLight floatLeft p1>left 2</Div>
      <Div bgLight floatRight p1 ml1>right 1</Div>
      <Div bgLight floatRight p1>right 2</Div>
      <Div clearfix mb1 />
      <Div bgLight floatLeft p1>left 1</Div>
      <Div bgLight floatRight p1>right 1</Div>
      <Div clearfix mb1 />
      <Div bgLight floatNone p1>no float</Div>
    </Display>
  ))
  .add('resize', () => (
    <Display resizeVertical overflowHidden>
      Resizeable
    </Display>
  ));

storiesOf('Utilities/width', module)
  .addParameters({
    readme: { sidebar: UtilitiesReadme },
  })
  .add('simple', () => (
    <Display>
      <Div mb2 bgInfo w100>100%</Div>
      <Div mb2 bgInfo w75>75%</Div>
      <Div mb2 bgInfo w50>50%</Div>
      <Div bgInfo w25>25%</Div>
    </Display>
  ))
  .add('breakpoints', () => (
    <Display w100 wMd50>
      100% only on xs and sm
    </Display>
  ));

storiesOf('Utilities/height', module)
  .addParameters({
    readme: { sidebar: UtilitiesReadme },
  })
  .add('simple', () => (
    <Display dFlex style={{ height: '64px' }}>
      <Div mr2 bgInfo h100 flexGrow>100%</Div>
      <Div mr2 bgInfo h75 flexGrow>75%</Div>
      <Div mr2 bgInfo h50 flexGrow>50%</Div>
      <Div bgInfo h25 flexGrow>25%</Div>
    </Display>
  ))
  .add('breakpoints', () => (
    <Display bgDark style={{ height: '128px' }}>
      <Display p0 m0 h100 hMd50>
        100% only on xs and sm
      </Display>
    </Display>
  ));

storiesOf('Utilities/text', module)
  .addParameters({
    readme: { sidebar: UtilitiesReadme },
  })
  .add('vertical alignment', () => (
    <Display>
      <Span mr1 textBaseline>baseline</Span>
      <Span mr1 textTop>top</Span>
      <Span mr1 textBottom>bottom</Span>
      <Span mr1 textTextTop>text-top</Span>
      <Span mr1 textTextBottom>text-bottom</Span>
    </Display>
  ))
  .add('transformations', () => (
    <div>
      <Display textUppercase>uppercase</Display>
      <Display textLowercase>LOWERCASE</Display>
      <Display textCapitalize> capitalize this</Display> {/* Space is required! */}
    </div>
  ))
  .add('horizontal alignment', () => (
    <div>
      <Display textLeft>Pulled left</Display>
      <Display textCenter>Centered</Display>
      <Display textRight>Pulled right</Display>
    </div>
  ))
  .add('modifications', () => (
    <Display>
      <Span m1 textWeightBold>bold</Span>
      <Span m1 textWeightBolder>bolder</Span>
      <Span m1 textWeightNormal>normal</Span>
      <Span m1 textWeightLight>light</Span>
      <Span m1 textWeightLighter>lighter</Span>
      <Span m1 textItalic>italic</Span>
      <Span m1 textMonospace>monospace</Span>
    </Display>
  ))
  .add('wrapping', () => (
    <Display>
      <Display textWrap style={{ width: '75px' }} bgInfo p1 m1>
        This text will wrap
      </Display>
      <Display textNoWrap style={{ width: '75px' }} bgInfo p1 m1>
        This text will not wrap
      </Display>
    </Display>
  ));

storiesOf('Utilities/display', module)
  .addParameters({
    readme: { sidebar: UtilitiesReadme },
  })
  .add('hide on breakpoint', () => (
    <Display dNone dMdBlock>
      Hidden on small screens
    </Display>
  ))
  .add('horizontal flex', () => (
    <Display dFlex justifyContentCenter flexRow>
      <Div m2 flexGrow>Flex 1 [row]</Div>
      <Div m2 flexGrow>Flex 2 [row]</Div>
      <Div m2 flexGrow>Flex 2 [row]</Div>
    </Display>
  ))
  .add('vertical flex', () => (
    <Display dFlex justifyContentCenter flexColumn>
      <Div m2 flexGrow>Flex 1 [column]</Div>
      <Div m2 flexGrow>Flex 2 [column]</Div>
      <Div m2 flexGrow>Flex 2 [column]</Div>
    </Display>
  ))
  .add('visibility', () => (
    <Display>
      <Display visible>
        Visible
      </Display>
      <Display invisible>
        Invisible
      </Display>
    </Display>
  ));

storiesOf('Utilities/borders', module)
  .addParameters({
    readme: { sidebar: UtilitiesReadme },
  })
  .add('simple', () => (
    <Display border>
      Border
    </Display>
  ))
  .add('right and bottom', () => (
    <Display borderRight borderBottom>
      Right and bottom border
    </Display>
  ))
  .add('rounded', () => (
    <Display rounded>
      Rounded
    </Display>
  ))
  .add('rounded pill', () => (
    <Display roundedPill>
      Pill
    </Display>
  ))
  .add('rounded circle', () => (
    <Display bgTransparent dFlex flexColumn alignItemsCenter>
      Circle
      <Div style={{ width: '64px', height: '64px' }} bgInfo roundedCircle />
    </Display>
  ));
