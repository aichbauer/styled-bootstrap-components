```jsx
<Container fluid>
  <form>
    <FormGroup row>
      <Column sm={3}>
        <Label>Email</Label>
      </Column>
      <Column sm={9}>
        <FormControlPlainText readonly disabled value="email@example.com" />
      </Column>
    </FormGroup>
    <FormGroup row>
      <Column sm={3}>
        <Label>Password</Label>
      </Column>
      <Column sm={9}>
        <FormControl type="password" value="Password" />
      </Column>
    </FormGroup>
  </form>
</Container>
```
