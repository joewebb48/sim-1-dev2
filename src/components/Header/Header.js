import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header_wrapper'>
      <div className='headerLogo'>
        <h3>Shelfie</h3>
      </div>
      <div className='headerDash'>{/* <img src={}/> */}</div>
      <div className='HeaderAdd'>
        <h4>Add Inventory</h4>
      </div>
    </div>
  );
}
