import React from 'react';
import Nav from 'Components/Nav';
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
