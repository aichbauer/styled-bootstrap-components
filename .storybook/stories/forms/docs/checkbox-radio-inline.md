```jsx
<Container fluid>
  <form>
    <FormCheck inline>
      <FormCheckInput type="checkbox" />
      <Label>1</Label>
    </FormCheck>
    <FormCheck inline>
      <FormCheckInput type="checkbox" />
      <Label>2</Label>
    </FormCheck>
    <FormCheck inline>
      <FormCheckInput disabled type="checkbox" />
      <Label>3 (disabled)</Label>
    </FormCheck>
  </form>
  <form>
    <FormCheck inline>
      <FormCheckInput type="radio" name="exampleRadios" />
      <Label>1</Label>
    </FormCheck>
    <FormCheck inline>
      <FormCheckInput type="radio" name="exampleRadios" />
      <Label>2</Label>
    </FormCheck>
    <FormCheck inline>
      <FormCheckInput disabled type="radio" name="exampleRadios" />
      <Label>3 (disabled)</Label>
    </FormCheck>
  </form>
</Container>
```
