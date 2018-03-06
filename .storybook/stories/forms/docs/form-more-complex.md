```jsx
<Container fluid style={{ textAlign: 'left' }}>
  <form>
    <FormGroup row nomb>
      <Column sm={6}>
        <FormGroup>
          <Label>Email</Label>
          <FormControl type="text" placeholder="Email" />
        </FormGroup>
      </Column>
      <Column sm={6}>
        <FormGroup>
          <Label>Password</Label>
          <FormControl type="password" placeholder="Password" />
        </FormGroup>
      </Column>
    </FormGroup>
    <FormGroup row nomb>
      <Column sm={12}>
        <FormGroup>
          <Label>Address</Label>
          <FormControl type="text" placeholder="1234 Main St" />
        </FormGroup>
      </Column>
    </FormGroup>
    <FormGroup row>
      <Column sm={12}>
        <FormGroup>
          <Label>Address 2</Label>
          <FormControl type="text" placeholder="Apartment, Studio, or floor" />
        </FormGroup>
      </Column>
    </FormGroup>
    <FormGroup row nomb>
      <Column sm={6}>
        <FormGroup>
          <Label>City</Label>
          <FormControl type="text" />
        </FormGroup>
      </Column>
      <Column sm={4}>
        <FormGroup>
          <Label>State</Label>
          <FormControl select>
            <option>Choose...</option>
            <option>...</option>
          </FormControl>
        </FormGroup>
      </Column>
      <Column sm={2}>
        <FormGroup>
          <Label>Zip</Label>
          <FormControl type="text" />
        </FormGroup>
      </Column>
    </FormGroup>
    <FormGroup row>
      <Column sm={12}>
        <FormCheck>
          <FormCheckInput type="checkbox" />
          <Label>Check me out</Label>
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
