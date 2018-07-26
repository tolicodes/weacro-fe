import React from 'react';
import Nav from '../../Nav/Nav';
import ResponsiveHeader from './ResponsiveHeader';

function PageLayout({ children }) {
  return (
    <div>
      <ResponsiveHeader>
        <Nav />
      </ResponsiveHeader>
      {children}
    </div>
  );
}
export default PageLayout;
