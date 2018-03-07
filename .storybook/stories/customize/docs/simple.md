# Customize

> Create **your own UI Component Library** on top of `styled-bootstrap-components`

Use the components as entrypoint for your own library.

## Example

```jsx
import styled from 'styled-components';
import { Button } from 'styled-bootstrap-components';

export const CustomizedButton = styled(Button)`
  border-radius: 0;
`;
```
