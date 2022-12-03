import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

function CardHouse() {
  return (
    <>
      <div className="bg-gray-100 ">
        {/* Remove py-8 */}
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            {/* Card 1 */}
            <div className="mx-2 w-72 lg:mb-0 mb-8">
              <div>
                <NavLink to={'/housedetail'}>
                  <img
                    src="https://www.conclusion.com.ar/wp-content/uploads/2020/07/Salon.jpg"
                    className="w-full h-44"
                    alt="salon"
                  />
                </NavLink>
              </div>
              <div className="bg-white">
                {/* tags */}
                <div className="flex items-center justify-between px-4 pt-4">
                  <div className="bg-yellow-200 py-1.5 px-3 rounded-full">
                    <p className="text-xs text-yellow-500">Graduación</p>
                  </div>
                </div>
                {/* Detalles */}
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold">Salon Margarita</h2>
                    <p className="text-xs text-gray-600 pl-5">4 stars</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    The Apple iPhone XS is available in 3 colors with 64GB
                    memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4"></div>
                  <div className="flex items-center justify-start py-2">
                    <BsPeopleFill />
                    <h2 className="text-indigo-700 text-xs font-semibold ml-2">
                      Aforo, 250
                    </h2>
                  </div>
                  <div className="flex items-center justify-start py-2">
                    <FaMapMarkerAlt />
                    <h2 className="text-indigo-700 text-xs font-semibold ml-2">
                      Bay Area, San Francisco
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardHouse
