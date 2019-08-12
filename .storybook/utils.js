import React from 'react';

// Workaround for hooks in stories
export const Story = (Component) => (() => <Component />);
