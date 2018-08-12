import React from 'react';

import LoadDisplay from './Loader';


export default ({ load: loaded, children }) => (
  loaded
    ? children
    : <LoadDisplay />
);
