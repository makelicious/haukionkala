import React from 'react';
import { Link } from 'react-router';

function frontPage() {
  return (
    <div className='front-page'>
    <div className='front-page__header'>
      <div className='logo-container'></div>
      <h1 className="front-page__header__title">&nbsp;= KALA</h1>
    </div>
      <div className='front-page__content'>
        <h2 className='front-page__content__title'>Have you ever tried to remember something?</h2>
        <p> Hauki = kala provides you a quick way to remember stuff using flashcards</p>
        <p>Add your own questions and answers on a subject you want to learn and start flashing</p>
        <Link to='/study' className='front-page__link'>Jump in!</Link>
      </div>
    </div>
  )
}

export default frontPage;
