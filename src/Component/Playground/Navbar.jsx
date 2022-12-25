import React from 'react'

function Navbar({isFullScreen}) {
  return (
    <div className={`relative ${isFullScreen ?"h-0":"h-16"} bg-black flex justify-center items-center gap-4`}>
      <img className='w-16' src='/logo.png' alt='' />
      <div className='text-secondry text-white text-2xl'>
        Code <span style={{color:'skyblue'}}>Deck</span> 
      </div>
    </div>
  )
}

export default Navbar