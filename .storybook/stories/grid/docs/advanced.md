```jsx
<Container fluid>
  <Row style={RowStyle}>
    <Column sm={12} md={8} style={ColumnStyle}>
      {'sm={12} md={8}'}
    </Column>
    <Column md={4} sm={6} style={ColumnStyle}>
      {'sm={6} md={4}'}
    </Column>
  </Row>

  <Row style={RowStyle}>
    <Column xs={6} md={4} style={ColumnStyle}>
      {'xs={6} md={4}'}
    </Column>
    <Column xs={6} md={4} style={ColumnStyle}>
      {'xs={6} md={4}'}
    </Column>
    <Column xs={12} sm={8} md={4} style={ColumnStyle}>
      {'xs={12} sm={8} md={4}'}
    </Column>
  </Row>

  <Row style={RowStyle}>
    <Column sm={6} style={ColumnStyle}>
      {'sm={6}'}
    </Column>
    <Column sm={6} style={ColumnStyle}>
      {'sm={6}'}
    </Column>
  </Row>

  <Row style={RowStyle}>
    <Column md={6} mdOffset={6} style={ColumnStyle}>
      {'md={6} mdOffset={6}'}
    </Column>
  </Row>

  <Row style={RowStyle}>
    <Column md={6} mdOffset={6} style={ColumnStyle}>
      <Row>
        <Column md={6} style={ColumnStyle}>
          {'md={6}'}
        </Column>
        <Column md={6} style={ColumnStyle}>
          {'md={6}'}
        </Column>
      </Row>
    </Column>
  </Row>
</Container>
```
