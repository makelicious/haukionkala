import React from 'react';
import { IndexLink } from 'react-router';

function Header () {
    return (
      <header className='header'>
        <nav className='navigation'>
          <IndexLink activeClassName='active' to='/categories'>Categories</IndexLink>
          <IndexLink activeClassName='active' to='/add'>Add&nbsp;questions</IndexLink>
          <IndexLink activeClassName='active' to='/study'>Study</IndexLink>
        </nav>
      </header>
  );
}

export default Header;
