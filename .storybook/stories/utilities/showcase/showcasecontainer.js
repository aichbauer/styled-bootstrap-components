import styled from 'styled-components';
import { Container } from '../../../../packages/styled-container-component';
import { Utilities } from '../../../../packages/styled-base-components';

const ShowcaseContainer = styled(Container)`
  background: #dddddd;
  margin-bottom: 1rem;
  padding: .5rem;

  ${Utilities};
`;

export default ShowcaseContainer;