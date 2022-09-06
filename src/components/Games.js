import React from 'react';
import './Games.css';

function Games() {
    return (
        <div className='Games'>
            <div className='GamesHeading'>Popular Games</div>
            <div className='Game'>
                <div className='GameLogo1'></div>
                <div className='GameDesc'>
                    Two teams will compete in two matches with 100 spectators each, and they must
                    kill one another safely and sensibly. Players must survive until the very end
                    of the game, at which point they will receive “Winner, Winner Chicken Dinner”
                    if they have won. Players can also join the match as a solo, pair, or team.
                    One such online game is PUBG.
                </div>
            </div>
            <div className='Game'>
                <div className='GameDesc'>
                    Fortnite Battle Royale is a free online game where 100 players compete against one another
                    for first place. With about 5 million concurrent players, it is one of the most played games.
                    You must construct some sort of wall and gather obstacles or other sources of elements in this
                    game. You can play alone or with other groups.
                </div>
                <div className='GameLogo2'></div>
            </div>
            <div className='Game'>
                <div className='GameLogo3'></div>
                <div className='GameDesc'>
                    In the multiplayer mode of Apex Legends, teams of up to twenty-three players must search an island
                    for weapons and supplies to give to a combatant while moving outside the game area. Teams must stay
                    safe because they can’t catch up, and if any remaining teams are still alive at the end of the game,
                    they win.
                </div>
            </div>
        </div>
    )
}

export default Games;