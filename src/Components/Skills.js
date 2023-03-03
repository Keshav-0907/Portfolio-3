import React from 'react'
import { BsCodeSlash } from 'react-icons/bs'
import { SiJavascript } from 'react-icons/si'
import { Icon } from '@iconify/react';


const Skills = () => {
    return (
        <div className='skills-main'>
            <h2> <BsCodeSlash /> What I Can do  </h2>
            <div className='skills-cont'>

                <div className='skills-block'>
                    <h3> Programing Languages </h3>
                    <div className='prog-lang'>
                        <div className='lang'>
                            <h4> <Icon width='30px' icon="logos:javascript" /> <span className='word'>JavaScript</span> </h4>
                        </div>
                        <div className='lang'>
                            <h4> <Icon width='30px' icon="logos:c-plusplus" /> <span className='word'> C/C++ </span></h4>
                        </div>
                        <div className='lang'>
                            <h4> <Icon width='30px' icon="logos:python" /> <span className='word'> Python </span> </h4>
                        </div>
                    </div>
                </div>

                <div className='skills-block'>
                    <h3> Front-End development </h3>
                    <div className='prog-lang'>
                        <div className='lang'>
                            <h4> <Icon width='30px' icon="logos:react" /> <span className='word'> React.JS </span> </h4>
                        </div>
                        <div className='lang'>
                            <h4> <Icon width='30px' icon="cib:next-js" /> <span className='word'> Next.JS </span> </h4>
                        </div>
                        <div className='lang'>
                            <h4> <Icon width='30px' icon="skill-icons:tailwindcss-light"/> <span className='word'> Tailwind CSS </span> </h4>
                        </div>
                    </div>
                </div>

                <div className='skills-block'>
                    <h3> Back-End development  </h3>
                    <div className='prog-lang'>
                        <div className='lang'>
                            <h4> <Icon width='30px' icon="simple-icons:nodedotjs" color="#759f69" /> <span className='word'> Node.js </span> </h4>
                        </div>
                    </div>
                </div>

                <div className='skills-block'>
                    <h3> Graphic Design  </h3>
                    <div className='prog-lang'>
                        <div className='lang'>
                            <h4> <Icon width='30px' icon="skill-icons:figma-light" color="#759f69" />   <span className='word'> Figma </span> </h4>
                        </div>
                        <div className='lang'>
                            <h4> <Icon width='30px' icon="logos:adobe-photoshop" />   <span className='word'> Adobe photoshop </span> </h4>
                        </div>
                    </div>
                </div>

                <div className='skills-block'>
                    <h3> Technology  </h3>
                    <div className='prog-lang'>
                        <div className='lang'>
                            <h4> <Icon width='30px' icon="fe:github" />   <span className='word'> Github </span> </h4>
                        </div>
                        <div className='lang'>
                            <h4> <Icon width='30px' icon="simple-icons:qgis" color="#6b933f" />  <span className='word'> Q-Gis </span> </h4>
                        </div>
                        <div className='lang'>
                            <h4> <Icon width='30px' icon="mdi:git" color="#d8593e" />   <span className='word'> Git </span> </h4>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Skills

