import React from 'react';
import { IndexLink } from 'react-router';

function Header () {
    return (
      <header className='header'>
        <nav className='navigation'>
          <IndexLink className='navigation__link' activeClassName="navigation__link_active" to='/categories'>Categories</IndexLink>
          <IndexLink className='navigation__link' activeClassName="navigation__link_active" to='/add'>Add&nbsp;questions</IndexLink>
          <IndexLink className='navigation__link' activeClassName="navigation__link_active" to='/study'>Study</IndexLink>
        </nav>
      </header>
  );
}

export default Header;
