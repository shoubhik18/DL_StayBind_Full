import React from 'react'
import iphone from '../assets/iPhone15Pro.png'
import play from '../assets/Playstore.png'
import app from '../assets/applestore.png'

const Download = () => {
  return (
    <div className="bg-hero-pattern items-center bg-cover h-[90vh] flex " >
      <div className="items-center">
        <img className='h-[90vh]' src={iphone} alt="" />
      </div>
      <div className="items-center space-y-28 ">
        <h1 className='text-4xl font-black  ' >Download The StayBind App</h1>
        <div className="flex space-x-6  justify-center">
          <img className='h-12'  src={play} alt="" />
          <img className='h-12'  src={app} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Download
