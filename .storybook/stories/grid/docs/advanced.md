```jsx
<Container fluid>
  <Row>
    <p>
      The blue background color, the white color and the white border are just for demonstration purposes. Actually a container does not have a background color, a color or a border.
    </p>
  </Row>
  {/* column grows to 100% width at screen width 576px */}
  <Row>
    <Column sm={4} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column sm={4}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
    <Column sm={4} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column sm={4}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
    <Column sm={4} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column sm={4}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
  </Row>
  {/* column grows to 100% width at screen width 768px */}
  <Row>
    <Column md={4} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column md={3}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
    <Column md={4} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column md={3}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
    <Column md={4} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column md={3}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
  </Row>
  {/* column grows to 100% width at screen width 992px */}
  <Row>
    <Column lg={4} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column lg={3}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
    <Column lg={4} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column lg={3}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
    <Column lg={4} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column lg={3}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
  </Row>
  {/* column grows to 100% width at screen width 1200px */}
  <Row>
    <Column xl={4} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column xl={3}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
    <Column xl={4} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column xl={3}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
    <Column xl={4} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column xl={3}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
  </Row>
</Container>
```
