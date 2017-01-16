import React from 'react';
import { Link } from 'react-router';

function Header () {
    return (
      <div className='header'>
        <ul>
          <li><Link to='/categories'>Categories</Link></li>
          <li><Link to='/add'>Add questions</Link></li>
          <li><Link to='/study'>Study</Link></li>
        </ul>
      </div>
  );
}

export default Header
