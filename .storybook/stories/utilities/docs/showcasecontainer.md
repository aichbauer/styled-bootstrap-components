```jsx
import styled from 'styled-components';
import { Container } from '../../../../packages/styled-container-component';
import { Utilities } from '../../../../packages/styled-base-components';

export const ShowcaseContainer = styled(Container)`
  background: #dddddd;
  margin-bottom: 1rem;

  ${Utilities};
`;

export default ShowcaseContainer;
```