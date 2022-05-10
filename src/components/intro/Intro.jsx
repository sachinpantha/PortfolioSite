import React from 'react'
import Me from '../../images/me.png'
import './intro.css'
const Intro = () => {
  return (
    <div className='intro'>
        <div className="intro-left">
            <div className="intro-left-wrapper">
                <h2 className='intro-intro'>Hello,My Name is</h2>
                <h1 className='intro-name'>Sachin Pantha</h1>
                <div className="intro-title">
                    <div className="intro-title-wrapper">
                        <div className="intro-title-item">MERN Stack</div>
                        <div className="intro-title-item">UI/UX Designer</div>
                        <div className="intro-title-item">Graphics Designer</div>
                        <div className="intro-title-item">Story Writer</div>
                    </div>
                </div>
                <div className="i-desc">
                Im a student of Bsc. CSIT at IOST in 2nd semester and I'm fumbling around with desining, creating, Exploring and Learning Programming also researching mysteries in Astrophysics.
                </div>
            </div>
        </div>
        <div className="intro-right">
        <div className="i-background">
                </div>
            <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro