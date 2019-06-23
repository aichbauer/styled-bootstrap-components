```jsx
<div>
  <ShowcaseContainer>
    <Span mr1 textBaseline>baseline</Span>
    <Span mr1 textTop>top</Span>
    <Span mr1 textBottom>bottom</Span>
    <Span mr1 textTextTop>text-top</Span>
    <Span textTextBottom>text-bottom</Span>
  </ShowcaseContainer>

  <ShowcaseContainer>
    <Span mr1 textUppercase>uppercase</Span>
    <Span mr1 textLowercase>LOWERCASE</Span>
    <Span mr1 textCapitalize> capitalize this</Span> {/* Space is required! */}
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

  <ShowcaseContainer>
    <Span m1 textWeightBold>bold</Span>
    <Span m1 textWeightBolder>bolder</Span>
    <Span m1 textWeightNormal>normal</Span>
    <Span m1 textWeightLight>light</Span>
    <Span m1 textWeightLighter>lighter</Span>
    <Span m1 textItalic>italic</Span>
    <Span m1 textMonospace>monospace</Span>
  </ShowcaseContainer>

  <ShowcaseContainer dFlex justifyContentCenter>
    <Div textWrap style={{width: "75px"}} bgInfo p1 m1>
      This text will wrap
    </Div>
    <Div textNoWrap style={{width: "75px"}} bgInfo p1 m1>
      This text will not wrap
    </Div>
  </ShowcaseContainer>
</div>
```
