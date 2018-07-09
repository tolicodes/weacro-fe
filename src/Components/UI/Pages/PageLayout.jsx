import React from 'react';
import Header from '../../Header';

function PageLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
export default PageLayout;
