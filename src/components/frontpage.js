import React from 'react';
import { Link } from 'react-router';

function frontPage() {
  return (
    <div className='front-page'>
    <div className='front-page__header'>
      <div className='logo-container'></div>
      <h1>&nbsp;= KALA </h1>
    </div>
      <div className='front-page__content'>
        <h2>Have you ever tried to remember something?</h2>
        <p>Look no further!</p>
        <p> Hauki = kala is an app that provides you a quick way to remember stuff</p>
        <Link to='/study' className='front-page__link'>Jump right in!</Link>
      </div>
    </div>
  )
}

export default frontPage;
