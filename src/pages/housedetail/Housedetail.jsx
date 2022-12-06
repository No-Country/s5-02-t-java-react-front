import CalendarComponent from 'components/calendar/CalendarComponent'
import CarouselComponent from 'components/carousel/CarouselComponent'
import ModalComponent from 'components/modals/Modalcomponent'
import ShopCart from 'components/shopcart/ShopCart'
import React from 'react'
import useModal from '../../hooks/useModal'

const Housedetail = () => {
  const { modals, openClose } = useModal()

  return (
    <>
      <CarouselComponent />
      <>
        {/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
extend: {
  gridTemplateRows: {
    '[auto,auto,1fr]': 'auto auto 1fr',
  },
},
    },
    plugins: [
// ...
require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/}
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Salon Margarita
            </h1>
          </div>
          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              $192 por hora
            </p>
            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {/*
          Heroicon name: mini/star

          Active: "text-gray-900", Default: "text-gray-200"
        */}
                  <svg
                    className="text-gray-900 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* Heroicon name: mini/star */}
                  <svg
                    className="text-gray-900 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* Heroicon name: mini/star */}
                  <svg
                    className="text-gray-900 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* Heroicon name: mini/star */}
                  <svg
                    className="text-gray-900 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* Heroicon name: mini/star */}
                  <svg
                    className="text-gray-200 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="sr-only">4 out of 5 stars</p>
                <a
                  href="/#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  117 reviews
                </a>
              </div>
            </div>
            <form className="mt-10" onSubmit={(e) => e.preventDefault()}>
              {/* CALENDAR */}
              <>
                <div className="flex items-center justify-center py-8 px-4">
                  <CalendarComponent />
                </div>
              </>
              {/* CALENDAR */}

              <button
                onClick={() => openClose('shop')}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Reservar
              </button>
              <ModalComponent
                modal={modals['shop']}
                closeModal={() => openClose('shop')}
                closeOverlay={false}
                titulo={'Realizar pago'}
                /* ancho="450px"
                padding="40px" */
              >
                <ShopCart />
              </ModalComponent>
            </form>
          </div>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti et ad aut velit. Similique adipisci aperiam facilis
                  distinctio vitae porro.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">
                El salon contiene
              </h3>
              <div className="mt-4">
                <ul  className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Hand cut and sewn locally
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Dyed with our proprietary colors
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Pre-washed &amp; pre-shrunk
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Ultra-soft 100% cotton
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  The 6-Pack includes two black, two white, and two heather gray
                  Basic Tees. Sign up for our subscription service and be the
                  first to get new, exciting colors, like our upcoming "Charcoal
                  Gray" limited release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default Housedetail
