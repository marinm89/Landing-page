import React from 'react';
import logo from './images/logo.svg';
import hero from './images/hero-desktop.jpg';
import './App.css';
import arrow from './images/icon-arrow.svg'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

function App() {

  return (
    <div className="App">
      <div className='description'>
        <div className='text-part'>
            <img src={logo}/>
            <h1>WE'RE</h1>
            <h2>COMING SOON</h2>
            <p>
              Hello fellow shoppers! We're currently building our new fashion store.
              Add your email below to stay up-to-date with announcments and our launch deals.
            </p>
        </div>
        <div className='form'>
            <input type='email' placeholder='Email Address'/>
            <button type='submit'><img src={arrow}/></button>
      </div>  
      </div>  
      <div className='avatar'>
        <img src={hero} />
      </div>
    </div>
  );
}

export default App;
