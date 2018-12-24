```jsx
<Container fluid>
  <form>
    <FormGroup>
      <label>Email address</label>
      <FormControl type="email" placeholder="name@example.com" />
    </FormGroup>
    <FormGroup>
      <label>Example select</label>
      <FormControl select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </FormControl>
    </FormGroup>
    <FormGroup>
      <label>Example multiple select</label>
      <FormControl select multiple>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </FormControl>
    </FormGroup>
    <FormGroup>
      <label>Example textarea</label>
      <FormControl textarea rows="3" />
    </FormGroup>
    <FormGroup>
      <label>Example file input</label>
      <FormControlFile type="file" />
    </FormGroup>
  </form>
</Container>
```
