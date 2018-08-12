import React from 'react';
import Nav from '../Nav';
import ResponsiveHeader from './ResponsiveHeader';

const PageLayout = ({ children }) => (
  <div>
    <ResponsiveHeader>
      <Nav />
    </ResponsiveHeader>
    {children}
  </div>
);
export default PageLayout;
