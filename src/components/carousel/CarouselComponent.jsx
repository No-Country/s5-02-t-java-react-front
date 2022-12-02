import React from 'react'
import { Carousel } from 'flowbite-react'

function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 p-9">
      <Carousel slideInterval={5000}>
        <img
          src="https://i.ibb.co/CK8zgQc/pexels-rosario-fernandes-3835638-1.jpg"
          alt="..."
          className="object-cover"
        />
        <img
          src="https://i.ibb.co/sWZgqkZ/Rectangle-610.jpg"
          alt="..."
          className="object-cover rounded-none"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
          className="object-cover"
        />
        <img
          src="https://i.ibb.co/sWZgqkZ/Rectangle-610.jpg"
          alt="..."
          className="object-cover"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
          className="object-cover"
        />
      </Carousel>
    </div>
  )
}

export default CarouselComponent
