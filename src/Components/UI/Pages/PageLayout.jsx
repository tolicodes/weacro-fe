import React from 'react';
import { connect } from 'react-redux';
import Header from '../../Header';

function PageLayout({ children, router }) {
  console.log(router);
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
export default PageLayout;
