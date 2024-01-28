'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import bg from '../../img/dd.webp'
import eel from '../../img/eel.webp'

function Carousel() {
 const [imageSrc, setImageSrc] = useState(bg)


 useEffect(() => {
    if (window.innerWidth <= 640) {
      setImageSrc(eel)
    } else {
      setImageSrc(bg)
    }
 }, [])

 return (
    <div className='lg:mt-6 mx-auto justify-center items-center flex '>
        <Image
        src={imageSrc}
        objectFit='cover'
        
          alt="Background Image"
          className=''
        />
    </div>
 )
}

export default Carousel