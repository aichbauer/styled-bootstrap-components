```jsx
<Container fluid>
  <form>
    <FormGroup>
      <Label>Email address</Label>
      <FormControl type="email" placeholder="name@example.com" />
    </FormGroup>
    <FormGroup>
      <Label>Example select</Label>
      <FormControl select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </FormControl>
    </FormGroup>
    <FormGroup>
      <Label>Example multiple select</Label>
      <FormControl select multiple>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </FormControl>
    </FormGroup>
    <FormGroup>
      <Label>Example textarea</Label>
      <FormControl textarea rows="3" />
    </FormGroup>
    <FormGroup>
      <Label>Example file input</Label>
      <FormControlFile type="file" />
    </FormGroup>
  </form>
</Container>
```
