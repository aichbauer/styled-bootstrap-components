```jsx
<Container fluid>
  <InputGroup style={{ marginBottom: '0.5rem' }}>
    <InputGroupPrepend>
      <InputGroupText>@</InputGroupText>
    </InputGroupPrepend>
    <FormControl type="text" placeholder="Username" />
  </InputGroup>
  <InputGroup style={{ marginBottom: '0.5rem' }}>
    <FormControl type="text" placeholder="Recipient's username" />
    <InputGroupAppend>
      <InputGroupText>@example.com</InputGroupText>
    </InputGroupAppend>
  </InputGroup>
  <Label>Your vanity URL</Label>
  <InputGroup style={{ marginBottom: '0.5rem' }}>
    <InputGroupPrepend>
      <InputGroupText>https://example.com/users/</InputGroupText>
    </InputGroupPrepend>
    <FormControl type="text" />
  </InputGroup>
  <InputGroup style={{ marginBottom: '0.5rem' }}>
    <InputGroupPrepend>
      <InputGroupText>$</InputGroupText>
    </InputGroupPrepend>
    <FormControl type="text" />
    <InputGroupAppend>
      <InputGroupText>.00</InputGroupText>
    </InputGroupAppend>
  </InputGroup>
  <InputGroup style={{ marginBottom: '0.5rem' }}>
    <InputGroupPrepend>
      <InputGroupText>With textarea</InputGroupText>
    </InputGroupPrepend>
    <FormControl textarea />
  </InputGroup>
</Container>
```
