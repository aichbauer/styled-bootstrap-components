import React from 'react';
import ShowcaseContainer from './showcasecontainer';

const Resize = () => (
  <div>
    <ShowcaseContainer resizeVertical overflowHidden>
      Resizeable!
    </ShowcaseContainer>
  </div>
)

export default Resize;
