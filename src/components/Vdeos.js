import React from 'react'

const Vdeos = () => {
  return (
    <div className='video-div' id='Home'>
    <h2>Video Player</h2>
    <video width="100%" height="500"  autoPlay loop>
      <source src="/Assests/seyon.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  )
}

export default Vdeos
