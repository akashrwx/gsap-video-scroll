import * as React from 'react';
import './Header.scss';
import { Link } from 'gatsby';

function Header() {
  return (
    <header className="header-main">
      <div className="container">
        <div className="row align-center">
          <div className="col col-3">
            {/* <Link className="header-logo" to="/">
              <img src="/img/aeldra-logo.svg" alt="" />
            </Link> */}
          </div>
          <div className="col col-9">
            <div className="header-links flex align-center">
              <Link to="/">About us</Link>
              <Link to="/">FAQs</Link>
              <a href="#!" className="button button-secondary">
                Download App
              </a>
              <button type="button" className="button-unstyled nav-hamburger">
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
