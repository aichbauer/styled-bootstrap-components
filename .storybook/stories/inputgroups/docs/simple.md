```jsx
<Container fluid>
  <InputGroup>
    <InputGroupPrepend>
      <InputGroupText>@</InputGroupText>
    </InputGroupPrepend>
    <FormControl type="text" placeholder="Username" />
  </InputGroup>
  <InputGroup>
    <FormControl type="text" placeholder="Recipient's username" />
    <InputGroupAppend>
      <InputGroupText>@example.com</InputGroupText>
    </InputGroupAppend>
  </InputGroup>
  <label>Your vanity URL</label>
  <InputGroup>
    <InputGroupPrepend>
      <InputGroupText>https://example.com/users/</InputGroupText>
    </InputGroupPrepend>
    <FormControl type="text" />
  </InputGroup>
  <InputGroup>
    <InputGroupPrepend>
      <InputGroupText>$</InputGroupText>
    </InputGroupPrepend>
    <FormControl type="text" />
    <InputGroupAppend>
      <InputGroupText>.00</InputGroupText>
    </InputGroupAppend>
  </InputGroup>
  <InputGroup>
    <InputGroupPrepend>
      <InputGroupText>With textarea</InputGroupText>
    </InputGroupPrepend>
    <FormControl textarea />
  </InputGroup>
</Container>
```
