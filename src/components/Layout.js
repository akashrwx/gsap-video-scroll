import * as React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';

import Header from './Header/Header';
import '../styles/master.scss';

function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
