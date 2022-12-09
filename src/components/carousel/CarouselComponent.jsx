import { Carousel } from 'flowbite-react'

function CarouselComponent({ images }) {
  return (
    <div className="h-64 px-4 py-2 mt-20 sm:mt-24 sm:h-64   xl:h-96 xl:mt-4 2xl:h-96 2xl:mt-4 sm:px-16 sm:py-0 ">
      <Carousel slideInterval={5000}>
        {images.map(({ imageUrl }) => (
          <img
            key={crypto.randomUUID()}
            src={imageUrl}
            alt="..."
            className="  h-fit"
          />
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselComponent
