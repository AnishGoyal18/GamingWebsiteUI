import React from 'react';
import './Hero.css';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiYoutube, } from 'react-icons/fi';

function Hero() {
    return (
        <div className='HeroSection'>
            <h1>Every Battle Must be <br />Faced Bravely. Be <br /> a Real Fighter.</h1>
            <h4>Game Enthusiast can join for <br />free and always keep the <br /> danger zone away from you.</h4>
            <div className='HeroButtons'>
                <div className='Signup'>Start for free</div>
                <div className='Discover'>Discover More</div>
            </div>
            <div className='Social'>
                <AiOutlineTwitter className='Icon' />
                <FaInstagram className='Icon' />
                <FiFacebook className='Icon' />
                <FiYoutube className='Icon' />
            </div>
        </div>
    )
}

export default Hero;