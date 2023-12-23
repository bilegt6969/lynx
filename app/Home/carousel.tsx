import React from 'react'
import Image from 'next/image'
import bg from '../../img/dd.webp'

function Home() {
  return (
    <div>
        <Image
        src={bg}
          alt="Background Image"
          objectFit="cover"
        />
    </div>
  )
}

export default Home