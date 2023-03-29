import * as React from 'react';
import './Introduce.css'

const Introduce = ()=>{
    return <div className='landBackground'>
        {/* <h1>Brady個人網站載入</h1> */}
        <div className="static-text">I'm Brady. I am a</div>
        <div className="dynamic-text-wrapper">
            <div className="dynamic-text">Software Engineer</div>
            <div className="dynamic-text">Data Engineer</div>
            <div className="dynamic-text">Data Analysist</div>
            <div className="dynamic-text">Good Father</div>
            <div className="dynamic-text">Dreamer</div>
        </div>
        <p className='hint'>animation coming soon...</p>
    </div>
};

export default Introduce
