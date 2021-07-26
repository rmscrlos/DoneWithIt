import React from 'react';

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  // if(!navigationRef.current)
  navigationRef.current?.navigate(name, parems);
};

export default {
  navigate,
};
