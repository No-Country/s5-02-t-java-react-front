import React from 'react'
import { NavLink } from 'react-router-dom'

const SectionImage = () => {
  return (
    <>
      {/* component */}
      <section
        className="h-screen bg-cover bg-left-top"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/wMCSzHD/pexels-rachel-claire-5491003.jpg")',
        }}
      >
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8 pb-11">
          <div className="max-w-2xl text-center">
            <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl font-gentium">
              Próximamente
            </h1>
            <p className="mt-6 lg:text-xl text-white font-gentium ">
              Suscríbite para recibir información a diario de nuestros salones.
            </p>
            <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
              <NavLink to={'/home'}>
                <button className="transform rounded-md bg-indigo-500 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none sm:mx-2">
                  Ver salones
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionImage
