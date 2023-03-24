import * as React from 'react';
import './LandingAnimation.css'

const LandingAnimation = ()=>{
    return <div className='landBackground'>
        <h1>Brady個人網站載入</h1>
        <div className="static-text">I'm Brady. I'd like to share my knowledge whth you. </div>
        <div className="dynamic-text-wrapper">
            <div className="dynamic-text">expand your business</div>
            <div className="dynamic-text">find the right customer</div>
            <div className="dynamic-text">level up your brand</div>
        </div>
        <p className='hint'>animation coming soon...</p>
    </div>
};

export default LandingAnimation
