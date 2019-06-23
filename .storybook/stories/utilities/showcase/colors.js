import React from 'react';
import ShowcaseContainer from './showcasecontainer';

const Colors = () => (
  <div>
    <ShowcaseContainer bgLight textDark>
      Light background and dark text color
    </ShowcaseContainer>

    <ShowcaseContainer bgDark textLight>
      Dark background and light text color
    </ShowcaseContainer>

    <ShowcaseContainer bgDanger textLight>
      Danger background with light text
    </ShowcaseContainer>

    <ShowcaseContainer bgInfo>
      Info background
    </ShowcaseContainer>
  </div>
)

export default Colors;
