import React from 'react';
import ShowcaseContainer from './showcasecontainer';

const Shadows = () => (
  <div>
    <ShowcaseContainer shadowNone>
      No shadow
    </ShowcaseContainer>

    <ShowcaseContainer shadowSmall>
      Small shadow
    </ShowcaseContainer>

    <ShowcaseContainer shadowSmall>
      Shadow
    </ShowcaseContainer>

    <ShowcaseContainer shadowSmall>
      Large shadow
    </ShowcaseContainer>
  </div>
)

export default Shadows;
