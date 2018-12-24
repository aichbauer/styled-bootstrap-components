```jsx
<Container fluid>
  <form>
    <FormGroup row>
      <Column sm={3}>
        <label>Email</label>
      </Column>
      <Column sm={9}>
        <FormControlPlainText readonly disabled value="email@example.com" />
      </Column>
    </FormGroup>
    <FormGroup row>
      <Column sm={3}>
        <label>Password</label>
      </Column>
      <Column sm={9}>
        <FormControl type="password" value="Password" />
      </Column>
    </FormGroup>
  </form>
</Container>
```
