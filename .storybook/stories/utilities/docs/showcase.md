```jsx
const ShowcaseContainer = styled(Container)`
  background: #dddddd;
  margin-bottom: 1rem;
  padding: .5rem;

  ${Utilities};
`;

const Showcase = () => (
  <div>
    <ShowcaseContainer p5 bgDark textLight>
      Padding with background and text color
    </ShowcaseContainer>

    <ShowcaseContainer>
      <Span mr1 textBaseline>baseline</Span>
      <Span mr1 textTop>top</Span>
      <Span mr1 textBottom>bottom</Span>
      <Span mr1 textTextTop>text-top</Span>
      <Span textTextBottom>text-bottom</Span>
    </ShowcaseContainer>

    <ShowcaseContainer textLeft>
      {'<- text of the left'}
    </ShowcaseContainer>

    <ShowcaseContainer textRight>
      {'text on the right ->'}
    </ShowcaseContainer>

    <ShowcaseContainer textCenter>
      {'<- text in the center ->'}
    </ShowcaseContainer>

    <ShowcaseContainer dFlex justifyContentCenter>
      <Div textWrap style={{width: "100px"}} bgPrimary p1 m1>
        This text will not wrap
      </Div>
      <Div textNoWrap style={{width: "100px"}} bgPrimary p1 m1>
        This text will not wrap
      </Div>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <Span m1 textWeightBold>bold</Span>
      <Span m1 textWeightBolder>bolder</Span>
      <Span m1 textWeightNormal>normal</Span>
      <Span m1 textWeightLight>light</Span>
      <Span m1 textWeightLighter>lighter</Span>
      <Span m1 textItalic>italic</Span>
      <Span m1 textMonospace>monospace</Span>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <Div mb2 bgPrimary w100>100%</Div>
      <Div mb2 bgPrimary w75>75%</Div>
      <Div mb2 bgPrimary w50>50%</Div>
      <Div bgPrimary w25>25%</Div>
    </ShowcaseContainer>

    <ShowcaseContainer borderRight borderBottom borderDanger>
      Red border on the right and in the bottom
    </ShowcaseContainer>

    <ShowcaseContainer dFlex justifyContentCenter>
      <Div m4 p2 bgLight flexGrow shadowSmall>Shadow</Div>
      <Div m4 ml2 p2 bgLight flexGrow shadow>Shadow</Div>
      <Div m4 ml2 p2 bgLight flexGrow shadowLarge>Shadow</Div>
    </ShowcaseContainer>
  </div>
)
```
