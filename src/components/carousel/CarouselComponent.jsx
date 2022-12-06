import React from 'react'
import { Carousel } from 'flowbite-react'

function CarouselComponent() {
  return (
    <div className="h-64 px-4 py-2 mt-20 sm:mt-24 sm:h-64   xl:h-96 xl:mt-4  2xl:h-96 2xl:mt-4 sm:px-16 sm:py-0 ">
      <Carousel slideInterval={5000}>
        <img
          src="https://i.ibb.co/CK8zgQc/pexels-rosario-fernandes-3835638-1.jpg"
          alt="..."
          className=" h-full "
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
          className="object-cover "
        />
        <img
          src="https://i.ibb.co/CK8zgQc/pexels-rosario-fernandes-3835638-1.jpg"
          alt="..."
          className=" h-full "
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
          className="object-cover"
        />
        <img
          src="https://i.ibb.co/CK8zgQc/pexels-rosario-fernandes-3835638-1.jpg"
          alt="..."
          className=" h-full "
        />
      </Carousel>
    </div>
  )
}

export default CarouselComponent
