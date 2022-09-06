import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className='Navbar'>
            <div className='Logo'>
                <span>LNCT</span> Games
            </div>
            <ul>
                <li><a className='Active' href="">Home</a></li>
                <li><a href="">Feature</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Games</a></li>
                <li><a href="">Store</a></li>
            </ul>
            <div className='NavButtons'>
                <div className='Signup'>Sign Up</div>
                <div className='Login'>Login</div>
            </div>
        </div>
    )
}

export default Navbar;