```jsx
<Container fluid>
  <form>
    <FormGroup row justify>
      <Column sm={2}>
        <Label>Email</Label>
      </Column>
      <Column sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Column>
    </FormGroup>
    <FormGroup row justify>
      <Column sm={2}>
        <Label>Password</Label>
      </Column>
      <Column sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Column>
    </FormGroup>
    <FormGroup row>
      <Column sm={2}>
        <Label>Radios</Label>
      </Column>
      <Column sm={10}>
        <FormCheck>
          <FormCheckInput type="radio" name="exampleRadios" />
          <Label>First radio</Label>
        </FormCheck>
        <FormCheck>
          <FormCheckInput type="radio" name="exampleRadios" />
          <Label>Second radio</Label>
        </FormCheck>
        <FormCheck>
          <FormCheckInput disabled type="radio" name="exampleRadios" />
          <Label>Third disabled radio</Label>
        </FormCheck>
      </Column>
    </FormGroup>
    <FormGroup row>
      <Column sm={2}>
        <Label>Checkbox</Label>
      </Column>
      <Column sm={10}>
        <FormCheck>
          <FormCheckInput type="checkbox" name="exampleRadios" />
          <Label>Example checkbox</Label>
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
