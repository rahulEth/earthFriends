import React from 'react'

import Image from 'next/image'

import heroImage from "../../../public/Images/earth_friendly_hero_image.jpeg";

const Hero = (): React.JSX.Element => {
  return (
    <section className='flex items-center justify-center gap-10 flex-col p-10 lg:flex-row'>

        <div className='flex items-center justify-center'>

        <Image

          src={heroImage}
          alt='Earth Eco Friendly Image'
          className='max-h-auto max-w-full rounded-3xl'

        />
        </div>

        <div className='flex items-center justify-center text-center lg:text-right'>

          <span className='flex items-center justify-center text-4xl text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ipsam numquam eum delectus expedita sequi est cupiditate officiis assumenda voluptatem nobis animi quod nostrum officia sapiente nihil corrupti nam, maxime nulla molestiae!</span>

        </div>
               

    </section>
  )
}

export default Hero