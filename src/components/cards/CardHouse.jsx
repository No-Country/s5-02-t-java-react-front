import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

function CardHouse({
  address,
  capacity,
  city,
  description,
  id,
  name,
  phone,
  photograpy,
}) {
  const price = 100

  return (
    <>
      <div className="bg-transparent">
        {/* Remove py-8 */}
        <div className="mx-auto container py-2 ">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            {/* Card 1 */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 shadow-md h-[450px] bg-white">
              <div>
                <NavLink to={`/housedetail/${id}`}>
                  <img
                    src={
                      photograpy ||
                      'https://www.conclusion.com.ar/wp-content/uploads/2020/07/Salon.jpg'
                    }
                    className="w-full h-44"
                    alt="salon"
                  />
                </NavLink>
              </div>
              <div className="bg-white">
                {/* tags */}
                <div className="flex items-center justify-between px-4 pt-4">
                  <div className="bg-yellow-200 py-1.5 px-3 rounded-full">
                    <p className="text-xs text-yellow-500">{city}</p>
                  </div>
                  <div className="bg-rose-200 py-1.5 px-3 rounded-full">
                    <p className="text-xs text-rose-500">${price}/hora</p>
                  </div>
                </div>
                {/* Detalles */}
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-xs text-gray-600 pl-5">{phone}</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">{description}</p>
                  <div className="flex mt-4"></div>
                  <div className="flex items-center justify-start py-2">
                    <BsPeopleFill />
                    <h2 className="text-indigo-700 text-xs font-semibold ml-2">
                      {capacity}
                    </h2>
                  </div>
                  <div className="flex items-center justify-start py-2">
                    <FaMapMarkerAlt />
                    <h2 className="text-indigo-700 text-xs font-semibold ml-2">
                      {address}
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
