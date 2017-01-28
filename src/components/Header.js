import React from 'react';
import { Link } from 'react-router';

function Header () {
    return (
      <header className='header'>
        <Link to='/'><div className='logo-container'></div></Link>
        <nav className='navigation'>
          <Link className='navigation__link' activeClassName="navigation__link_active" to='/categories'>Categories</Link>
          <Link className='navigation__link' activeClassName="navigation__link_active" to='/add'>Add&nbsp;questions</Link>
          <Link className='navigation__link' activeClassName="navigation__link_active" to='/study'>Study</Link>
        </nav>
      </header>
  );
}

export default Header;
