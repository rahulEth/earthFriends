import React from 'react'

import Image from 'next/image'

import heroImage from "../../../public/Images/earth_friendly_hero_image.jpeg";

const Hero = (): React.JSX.Element => {
  return (
    // <section className='flex items-center justify-center gap-10 flex-col p-10 lg:flex-row'>

    //     <div className='flex items-center justify-center'>

    //     <Image

    //       src={heroImage}
    //       alt='Earth Eco Friendly Image'
    //       className='max-h-auto max-w-full rounded-3xl'

    //     />
    //     </div>

    //     <div className='flex items-center justify-center text-center lg:text-right'>

    //       <span className='flex items-center justify-center text-4xl text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ipsam numquam eum delectus expedita sequi est cupiditate officiis assumenda voluptatem nobis animi quod nostrum officia sapiente nihil corrupti nam, maxime nulla molestiae!</span>

    //     </div>
               

    // </section>

    <section className='flex items-center justify-center flex-wrap xl:flex-nowrap py-10 gap-12'>

          <div className='flex items-center justify-center py-10 px-10 md:w-1/3 md:h-1/3'>

              <Image

                src={heroImage}
                alt='hero image'
                className='rounded-2xl overflow-hidden object-cover max-h-[35rem] max-w-[35rem] md:max-w-full md:max-h-auto md:max-h-full md:min-w-[40rem] md:minð-h-[40rem]'

              />

          </div>
          <div className='flex items-center justify-end text-center xl:text-right px-10'>

              <span className='text-2xl md:text-4xl md:flex items-center justify-end '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat at excepturi ab suscipit, beatae corrupti amet illo, rerum incidunt odit nostrum odio alias minus eaque dolorum consequuntur aspernatur? Aspernatur modi minima dolor.</span>

          </div>


    </section>

  )
}

export default Hero