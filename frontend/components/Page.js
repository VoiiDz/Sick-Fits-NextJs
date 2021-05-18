import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

function Page({ children }) {
  return (
    <div>
      <Header />
      <h1>Page</h1>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
