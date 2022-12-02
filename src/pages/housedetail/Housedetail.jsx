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
            <p className="text-3xl tracking-tight text-gray-900">$192</p>
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
                {/* component */}
                <div className="flex items-center justify-center py-8 px-4">
                  {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
                  <div className="max-w-sm w-full shadow-lg">
                    <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
                      <div className="px-4 flex items-center justify-between">
                        <span
                          tabIndex={0}
                          className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
                        >
                          October 2020
                        </span>
                        <div className="flex items-center">
                          <button
                            aria-label="calendar backward"
                            className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-left"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <polyline points="15 6 9 12 15 18" />
                            </svg>
                          </button>
                          <button
                            aria-label="calendar forward"
                            className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler  icon-tabler-chevron-right"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <polyline points="9 6 15 12 9 18" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-12 overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr>
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                    Mo
                                  </p>
                                </div>
                              </th>
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                    Tu
                                  </p>
                                </div>
                              </th>
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                    We
                                  </p>
                                </div>
                              </th>
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                    Th
                                  </p>
                                </div>
                              </th>
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                    Fr
                                  </p>
                                </div>
                              </th>
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                    Sa
                                  </p>
                                </div>
                              </th>
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                    Su
                                  </p>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="pt-6">
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center" />
                              </td>
                              <td className="pt-6">
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center" />
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center" />
                              </td>
                              <td className="pt-6">
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    1
                                  </p>
                                </div>
                              </td>
                              <td className="pt-6">
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    2
                                  </p>
                                </div>
                              </td>
                              <td className="pt-6">
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100">
                                    3
                                  </p>
                                </div>
                              </td>
                              <td className="pt-6">
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100">
                                    4
                                  </p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    5
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    6
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    7
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="w-full h-full">
                                  <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                    <a
                                      role="link"
                                      tabIndex={0}
                                      className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                                    >
                                      8
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    9
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100">
                                    10
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100">
                                    11
                                  </p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    12
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    13
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    14
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    15
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    16
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100">
                                    17
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100">
                                    18
                                  </p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    19
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    20
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    21
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    22
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    23
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100">
                                    24
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100">
                                    25
                                  </p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    26
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    27
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    28
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    29
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                  <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                    30
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
                      <div className="px-4">
                        <div className="border-b pb-4 border-gray-400 border-dashed">
                          <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                            8 de Octubre
                          </p>
                          <a
                            tabIndex={0}
                            className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                          >
                            Alquilado
                          </a>
                          <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                            Fiesta de cumpleaños
                          </p>
                        </div>
                        {/*   <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                          <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                            10:00 AM
                          </p>
                          <a
                            tabIndex={0}
                            className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                          >
                            Alquilado
                          </a>
                        </div>
                        <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                          <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                            12:00 PM
                          </p>
                          <a
                            tabIndex={0}
                            className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                          >
                            Evento
                          </a>
                          <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur.
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </div>
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
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
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
