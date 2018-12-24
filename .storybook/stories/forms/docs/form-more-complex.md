```jsx
<Container fluid>
  <form>
    <FormGroup row nomb>
      <Column sm={6}>
        <FormGroup>
          <label>Email</label>
          <FormControl type="text" placeholder="Email" />
        </FormGroup>
      </Column>
      <Column sm={6}>
        <FormGroup>
          <label>Password</label>
          <FormControl type="password" placeholder="Password" />
        </FormGroup>
      </Column>
    </FormGroup>
    <FormGroup row nomb>
      <Column sm={12}>
        <FormGroup>
          <label>Address</label>
          <FormControl type="text" placeholder="1234 Main St" />
        </FormGroup>
      </Column>
    </FormGroup>
    <FormGroup row>
      <Column sm={12}>
        <FormGroup>
          <label>Address 2</label>
          <FormControl type="text" placeholder="Apartment, Studio, or floor" />
        </FormGroup>
      </Column>
    </FormGroup>
    <FormGroup row nomb>
      <Column sm={6}>
        <FormGroup>
          <label>City</label>
          <FormControl type="text" />
        </FormGroup>
      </Column>
      <Column sm={4}>
        <FormGroup>
          <label>State</label>
          <FormControl select>
            <option>Choose...</option>
            <option>...</option>
          </FormControl>
        </FormGroup>
      </Column>
      <Column sm={2}>
        <FormGroup>
          <label>Zip</label>
          <FormControl type="text" />
        </FormGroup>
      </Column>
    </FormGroup>
    <FormGroup row>
      <Column sm={12}>
        <FormCheck>
          <FormCheckInput type="checkbox" />
          <label>Check me out</label>
        </FormCheck>
      </Column>
    </FormGroup>
    <FormGroup row nomb>
      <Column sm={12}>
        <Button primary>Submit</Button>
      </Column>
    </FormGroup>
  </form>
</Container>
```
