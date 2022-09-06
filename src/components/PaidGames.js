import React from 'react';
import './PaidGames.css';

function PaidGames() {
    return (
        <div className='PaidGamesMain'>
            <div className='Heading'>Paid Games</div>
            <div className='PaidGames'>
                <div className='GameCard'>
                    <div className='Img GameImg1'></div>
                    <div className='Price'>Price: $99 (Rs 7899.25)</div>
                </div>
                <div className='GameCard'>
                    <div className='Img GameImg2'></div>
                    <div className='Price'>Price: $50 (Rs 3989.52)</div>
                </div>
                <div className='GameCard'>
                    <div className='Img GameImg3'></div>
                    <div className='Price'>Price: $30 (Rs 2393.71)</div>
                </div>
                <div className='GameCard'>
                    <div className='Img GameImg4'></div>
                    <div className='Price'>Price: $25 (Rs 1994.76)</div>
                </div>
                <div className='GameCard'>
                    <div className='Img GameImg5'></div>
                    <div className='Price'>Price: $10 (Rs 888.52)</div>
                </div>
                <div className='GameCard'>
                    <div className='Img GameImg6'></div>
                    <div className='Price'>Price: $5 (Rs 440.00)</div>
                </div>
                <div className='GameCard'>
                    <div className='Img GameImg7'></div>
                    <div className='Price'>Price: $12 (Rs 1989.52)</div>
                </div>
                <div className='GameCard'>
                    <div className='Img GameImg8'></div>
                    <div className='Price'>Price: $7 (Rs 989.52)</div>
                </div>
            </div>
        </div>
    )
}

export default PaidGames;