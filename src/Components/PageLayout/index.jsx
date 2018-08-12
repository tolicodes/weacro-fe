import React from 'react';
import Nav from '../Nav';
import ResponsiveHeader from './ResponsiveHeader';

export default ({ children }) => (
  <div>
    <ResponsiveHeader>
      <Nav />
    </ResponsiveHeader>
    {children}
  </div>
);