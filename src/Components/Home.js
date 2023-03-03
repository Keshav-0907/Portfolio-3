import React from 'react'
import gif from './Images/main.gif'
import propic from './Images/DP.png'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

const Home = () => {
    return (
        <>
            <div className='home-main'>
                <div className='gif'>
                    <img src={gif} alt='err'></img>
                </div>
                <div className='info'>
                    <div className='head'>
                        <div className='head-pic'>
                            <img src={propic} alt='err'></img>
                        </div>
                        <div className='head-name'>
                            <h3> Hi I'm </h3>
                            <h1> Keshav Malik  </h1>
                        </div>
                    </div>

                    <div>
                        <About />
                    </div>

                    <div>
                        <Skills />
                    </div>
                    <div>
                        <Projects />
                    </div>
                </div>
            </div></>
    )
}

export default Home