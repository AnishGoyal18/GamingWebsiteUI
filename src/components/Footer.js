import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='Footer'>
            <div>
                © 2022, LNCT Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo,
                Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal
                Tournament, and the Unreal Tournament logo are trademarks or registered trademarks
                of Epic Games, Inc. in the United States of America and elsewhere. Other brands or
                product names are the trademarks of their respective owners. Non-US transactions
                through Epic Games International.
            </div>
            <div className='Bottom'>
                <div>Terms of Service</div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div>Privacy Policy</div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div>Store Refund Policy</div>
            </div>
        </div>
    )
}

export default Footer;