```jsx
<Container fluid>
  <Row>
    <p>
      The blue background color, the white color and the white border are just for demonstration purposes. Actually a container does not have a background color, a color or a border.
    </p>
  </Row>
  <Row>
    <Column sm={3} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column sm={3}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
    <Column sm={6} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column sm={6}>'}
      </p>
      <p>
        ...
      </p>
      <p>
        {'</Column>'}
      </p>
    </Column>
    <Column sm={3} style={{ backgroundColor: '#007bff', color: 'white', border: '1px solid white' }}>
      <p>
        {'<Column sm={3}>'}
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
