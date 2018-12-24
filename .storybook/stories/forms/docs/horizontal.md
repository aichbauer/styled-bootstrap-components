```jsx
<Container fluid>
  <form>
    <FormGroup row justify>
      <Column sm={2}>
        <label>Email</label>
      </Column>
      <Column sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Column>
    </FormGroup>
    <FormGroup row justify>
      <Column sm={2}>
        <label>Password</label>
      </Column>
      <Column sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Column>
    </FormGroup>
    <FormGroup row>
      <Column sm={2}>
        <label>Radios</label>
      </Column>
      <Column sm={10}>
        <FormCheck>
          <FormCheckInput type="radio" name="exampleRadios" />
          <label>First radio</label>
        </FormCheck>
        <FormCheck>
          <FormCheckInput type="radio" name="exampleRadios" />
          <label>Second radio</label>
        </FormCheck>
        <FormCheck>
          <FormCheckInput disabled type="radio" name="exampleRadios" />
          <label>Third disabled radio</label>
        </FormCheck>
      </Column>
    </FormGroup>
    <FormGroup row>
      <Column sm={2}>
        <label>Checkbox</label>
      </Column>
      <Column sm={10}>
        <FormCheck>
          <FormCheckInput type="checkbox" name="exampleRadios" />
          <label>Example checkbox</label>
        </FormCheck>
      </Column>
    </FormGroup>
    <FormGroup row>
      <Column sm={12}>
        <Button primary>Sign in</Button>
      </Column>
    </FormGroup>
  </form>
</Container>
```
