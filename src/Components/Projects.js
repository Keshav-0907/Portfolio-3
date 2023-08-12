import React from 'react'
import { Icon } from '@iconify/react';
import { BsCodeSlash } from 'react-icons/bs'


const ProjectData = [
  {
    id: 1,
    title: 'Saarthi',
    description: 'Saarthi: Revolutionizing Medical Assistance - A Direct Ambulance Booking and Tracking System for Swift Patient Care.',
    image: 'https://res.cloudinary.com/dkgwk8ey5/image/upload/v1691845144/saarthi_wnmsgq.png',
    link: 'https://github.com/Keshav-0907/saarthi'
  },
  {
    id: 2,
    title: 'Click Shop',
    description: 'ClickShop: Elevating Your Shopping Experience with React and Firebase - Unveiling Seamless Online Shopping',
    image: 'https://res.cloudinary.com/dkgwk8ey5/image/upload/v1691845144/ecomadmin_smcwon.png',
    link: 'https://github.com/Keshav-0907/E-Commerce-Admin'
  }
]


const Projects = () => {
  return (
    <>
      <h2> <BsCodeSlash />  My Projects </h2>
      <div className='Project-main'>
        <div className='Project-Cont'>
          {ProjectData.map((item) => (
            <div key={item.id}>

              <div className='Project-Card'>

                <div className='Project-Card-Img'>
                  <img src={item.image} alt={item.title} />
                </div>

                <div className='Project-Card-Content'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <a href={item.link} target='_blank' rel="noreferrer"> <button className='github-btn'> Github Repo </button> </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div></>
  )
}

export default Projects

