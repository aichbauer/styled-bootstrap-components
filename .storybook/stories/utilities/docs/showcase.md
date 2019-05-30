```jsx
const ShowcaseContainer = styled(Container)`
  background: #e0e0e0;
  margin-bottom: 0.25rem;
  padding: 0.25rem;

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
      <Span m1 textMonospace>italic</Span>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <Div mb1 bgPrimary w100>100%</Div>
      <Div mb1 bgPrimary w75>75%</Div>
      <Div mb1 bgPrimary w50>50%</Div>
      <Div mb1 bgPrimary w25>25%</Div>
    </ShowcaseContainer>

    <ShowcaseContainer>
      <Div borderRight borderDanger>Red border on the right</Div>
    </ShowcaseContainer>

    <ShowcaseContainer shadow>
      Shadow
    </ShowcaseContainer>
  </div>
);
```
