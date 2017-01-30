import React from 'react';

function frontPage() {
  return (
    <div className='front-page'>
    <div className='front-page__header'>
      <div className='logo-container'></div>
      <h1>= KALA </h1>
    </div>
      <div className='front-page__content'>
        <h2>Have you ever tried to remember something?</h2>
        <p>Look no further!</p>
        <p> Hauki=kala is an app which provides you a way to remember stuff, with ease</p>
        <a href='/study'>Jump right in!</a>
      </div>
    </div>
  )
}

export default frontPage;
