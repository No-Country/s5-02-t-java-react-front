import React from 'react'
import { NavLink } from 'react-router-dom'

function Team() {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            TEAM NO COUNTRY
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            S5-02-T-JAVA-REACT
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://i.ibb.co/kKdkydG/1.png"
                      alt="Alex"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Alex Terrones Rivera
                  </div>
                  <p className="text-gray-800 text-sm text-center">Fullstack</p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://github.com/AlexTRDev"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alextrdev/"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 64 64"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-linkedin"
                        >
                          <path d="M58,63H6c-2.8,0-5-2.2-5-5V6c0-2.8,2.2-5,5-5h52c2.8,0,5,2.2,5,5v52C63,60.8,60.8,63,58,63z M6,3C4.3,3,3,4.3,3,6v52     c0,1.7,1.3,3,3,3h52c1.7,0,3-1.3,3-3V6c0-1.7-1.3-3-3-3H6z M52,53h-7.1c-0.6,0-1-0.4-1-1V38.2c0-3.7-0.2-4.9-0.4-5.3     c-0.2-0.7-0.6-1.2-1.1-1.5c-0.5-0.4-1.1-0.5-1.8-0.5c-1,0-1.9,0.3-2.6,0.8c-0.8,0.6-1.3,1.3-1.6,2.2c-0.2,0.7-0.5,2.3-0.5,5.9V52     c0,0.6-0.4,1-1,1h-8.6c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1v1.5c2.3-2.1,5-3.1,8.2-3.1     c1.8,0,3.4,0.3,4.9,1c1.5,0.6,2.7,1.5,3.5,2.5c0.8,1,1.3,2.2,1.6,3.4c0.3,1.2,0.4,2.9,0.4,5.1V52C53,52.6,52.6,53,52,53z      M45.9,51H51V34.9c0-2-0.1-3.6-0.4-4.7c-0.2-1-0.7-1.9-1.3-2.7c-0.6-0.8-1.5-1.4-2.7-1.9c-1.2-0.5-2.6-0.8-4.1-0.8     c-3.4,0-6.2,1.4-8.4,4.3c-0.3,0.3-0.7,0.5-1.1,0.3c-0.4-0.1-0.7-0.5-0.7-0.9v-3.1h-5.1V51h6.6V39.8c0-3.2,0.2-5.3,0.6-6.5     c0.4-1.3,1.2-2.4,2.3-3.2c1.1-0.8,2.4-1.2,3.8-1.2c1.1,0,2.1,0.3,3,0.9c0.8,0.6,1.4,1.4,1.8,2.5c0.2,0.6,0.5,1.9,0.5,6V51z      M19.1,53H12c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1V52C20.1,52.6,19.7,53,19.1,53z M13,51h5.1V25.4H13V51z      M15.6,19.9c-2.5,0-4.6-2-4.6-4.4s2.1-4.4,4.6-4.4s4.6,2,4.6,4.4S18.1,19.9,15.6,19.9z M15.6,13c-1.4,0-2.6,1.1-2.6,2.4     s1.2,2.4,2.6,2.4s2.6-1.1,2.6-2.4S17,13,15.6,13z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://i.ibb.co/0yRbbfg/123579.jpg"
                      alt="Emanuel"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Emanuel Martinez
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Frontend Developer
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://github.com/EmanuelMartinez01"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/emanuelmartinez01/"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 64 64"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-linkedin"
                        >
                          <path d="M58,63H6c-2.8,0-5-2.2-5-5V6c0-2.8,2.2-5,5-5h52c2.8,0,5,2.2,5,5v52C63,60.8,60.8,63,58,63z M6,3C4.3,3,3,4.3,3,6v52     c0,1.7,1.3,3,3,3h52c1.7,0,3-1.3,3-3V6c0-1.7-1.3-3-3-3H6z M52,53h-7.1c-0.6,0-1-0.4-1-1V38.2c0-3.7-0.2-4.9-0.4-5.3     c-0.2-0.7-0.6-1.2-1.1-1.5c-0.5-0.4-1.1-0.5-1.8-0.5c-1,0-1.9,0.3-2.6,0.8c-0.8,0.6-1.3,1.3-1.6,2.2c-0.2,0.7-0.5,2.3-0.5,5.9V52     c0,0.6-0.4,1-1,1h-8.6c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1v1.5c2.3-2.1,5-3.1,8.2-3.1     c1.8,0,3.4,0.3,4.9,1c1.5,0.6,2.7,1.5,3.5,2.5c0.8,1,1.3,2.2,1.6,3.4c0.3,1.2,0.4,2.9,0.4,5.1V52C53,52.6,52.6,53,52,53z      M45.9,51H51V34.9c0-2-0.1-3.6-0.4-4.7c-0.2-1-0.7-1.9-1.3-2.7c-0.6-0.8-1.5-1.4-2.7-1.9c-1.2-0.5-2.6-0.8-4.1-0.8     c-3.4,0-6.2,1.4-8.4,4.3c-0.3,0.3-0.7,0.5-1.1,0.3c-0.4-0.1-0.7-0.5-0.7-0.9v-3.1h-5.1V51h6.6V39.8c0-3.2,0.2-5.3,0.6-6.5     c0.4-1.3,1.2-2.4,2.3-3.2c1.1-0.8,2.4-1.2,3.8-1.2c1.1,0,2.1,0.3,3,0.9c0.8,0.6,1.4,1.4,1.8,2.5c0.2,0.6,0.5,1.9,0.5,6V51z      M19.1,53H12c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1V52C20.1,52.6,19.7,53,19.1,53z M13,51h5.1V25.4H13V51z      M15.6,19.9c-2.5,0-4.6-2-4.6-4.4s2.1-4.4,4.6-4.4s4.6,2,4.6,4.4S18.1,19.9,15.6,19.9z M15.6,13c-1.4,0-2.6,1.1-2.6,2.4     s1.2,2.4,2.6,2.4s2.6-1.1,2.6-2.4S17,13,15.6,13z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://i.ibb.co/kqhcv9r/2.png"
                      alt="Abel"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Abel Acevedo
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Backend Java
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://github.com/Abel3581"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abel-fernando-acevedo/"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 64 64"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-linkedin"
                        >
                          <path d="M58,63H6c-2.8,0-5-2.2-5-5V6c0-2.8,2.2-5,5-5h52c2.8,0,5,2.2,5,5v52C63,60.8,60.8,63,58,63z M6,3C4.3,3,3,4.3,3,6v52     c0,1.7,1.3,3,3,3h52c1.7,0,3-1.3,3-3V6c0-1.7-1.3-3-3-3H6z M52,53h-7.1c-0.6,0-1-0.4-1-1V38.2c0-3.7-0.2-4.9-0.4-5.3     c-0.2-0.7-0.6-1.2-1.1-1.5c-0.5-0.4-1.1-0.5-1.8-0.5c-1,0-1.9,0.3-2.6,0.8c-0.8,0.6-1.3,1.3-1.6,2.2c-0.2,0.7-0.5,2.3-0.5,5.9V52     c0,0.6-0.4,1-1,1h-8.6c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1v1.5c2.3-2.1,5-3.1,8.2-3.1     c1.8,0,3.4,0.3,4.9,1c1.5,0.6,2.7,1.5,3.5,2.5c0.8,1,1.3,2.2,1.6,3.4c0.3,1.2,0.4,2.9,0.4,5.1V52C53,52.6,52.6,53,52,53z      M45.9,51H51V34.9c0-2-0.1-3.6-0.4-4.7c-0.2-1-0.7-1.9-1.3-2.7c-0.6-0.8-1.5-1.4-2.7-1.9c-1.2-0.5-2.6-0.8-4.1-0.8     c-3.4,0-6.2,1.4-8.4,4.3c-0.3,0.3-0.7,0.5-1.1,0.3c-0.4-0.1-0.7-0.5-0.7-0.9v-3.1h-5.1V51h6.6V39.8c0-3.2,0.2-5.3,0.6-6.5     c0.4-1.3,1.2-2.4,2.3-3.2c1.1-0.8,2.4-1.2,3.8-1.2c1.1,0,2.1,0.3,3,0.9c0.8,0.6,1.4,1.4,1.8,2.5c0.2,0.6,0.5,1.9,0.5,6V51z      M19.1,53H12c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1V52C20.1,52.6,19.7,53,19.1,53z M13,51h5.1V25.4H13V51z      M15.6,19.9c-2.5,0-4.6-2-4.6-4.4s2.1-4.4,4.6-4.4s4.6,2,4.6,4.4S18.1,19.9,15.6,19.9z M15.6,13c-1.4,0-2.6,1.1-2.6,2.4     s1.2,2.4,2.6,2.4s2.6-1.1,2.6-2.4S17,13,15.6,13z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://i.ibb.co/PMk8J4B/3.jpg"
                      alt="Gabriel"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Gabriel Navarro
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Backend Java
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://github.com/gabynavarro"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/gabriel-navarro-233388219/"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 64 64"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-linkedin"
                        >
                          <path d="M58,63H6c-2.8,0-5-2.2-5-5V6c0-2.8,2.2-5,5-5h52c2.8,0,5,2.2,5,5v52C63,60.8,60.8,63,58,63z M6,3C4.3,3,3,4.3,3,6v52     c0,1.7,1.3,3,3,3h52c1.7,0,3-1.3,3-3V6c0-1.7-1.3-3-3-3H6z M52,53h-7.1c-0.6,0-1-0.4-1-1V38.2c0-3.7-0.2-4.9-0.4-5.3     c-0.2-0.7-0.6-1.2-1.1-1.5c-0.5-0.4-1.1-0.5-1.8-0.5c-1,0-1.9,0.3-2.6,0.8c-0.8,0.6-1.3,1.3-1.6,2.2c-0.2,0.7-0.5,2.3-0.5,5.9V52     c0,0.6-0.4,1-1,1h-8.6c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1v1.5c2.3-2.1,5-3.1,8.2-3.1     c1.8,0,3.4,0.3,4.9,1c1.5,0.6,2.7,1.5,3.5,2.5c0.8,1,1.3,2.2,1.6,3.4c0.3,1.2,0.4,2.9,0.4,5.1V52C53,52.6,52.6,53,52,53z      M45.9,51H51V34.9c0-2-0.1-3.6-0.4-4.7c-0.2-1-0.7-1.9-1.3-2.7c-0.6-0.8-1.5-1.4-2.7-1.9c-1.2-0.5-2.6-0.8-4.1-0.8     c-3.4,0-6.2,1.4-8.4,4.3c-0.3,0.3-0.7,0.5-1.1,0.3c-0.4-0.1-0.7-0.5-0.7-0.9v-3.1h-5.1V51h6.6V39.8c0-3.2,0.2-5.3,0.6-6.5     c0.4-1.3,1.2-2.4,2.3-3.2c1.1-0.8,2.4-1.2,3.8-1.2c1.1,0,2.1,0.3,3,0.9c0.8,0.6,1.4,1.4,1.8,2.5c0.2,0.6,0.5,1.9,0.5,6V51z      M19.1,53H12c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1V52C20.1,52.6,19.7,53,19.1,53z M13,51h5.1V25.4H13V51z      M15.6,19.9c-2.5,0-4.6-2-4.6-4.4s2.1-4.4,4.6-4.4s4.6,2,4.6,4.4S18.1,19.9,15.6,19.9z M15.6,13c-1.4,0-2.6,1.1-2.6,2.4     s1.2,2.4,2.6,2.4s2.6-1.1,2.6-2.4S17,13,15.6,13z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://i.ibb.co/xmhbC44/4.jpg"
                      alt="Omar"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Omar Lestrade
                  </div>
                  <p className="text-gray-800 text-sm text-center">Frontend</p>

                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://github.com/Lestradez"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 64 64"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-linkedin"
                        >
                          <path d="M58,63H6c-2.8,0-5-2.2-5-5V6c0-2.8,2.2-5,5-5h52c2.8,0,5,2.2,5,5v52C63,60.8,60.8,63,58,63z M6,3C4.3,3,3,4.3,3,6v52     c0,1.7,1.3,3,3,3h52c1.7,0,3-1.3,3-3V6c0-1.7-1.3-3-3-3H6z M52,53h-7.1c-0.6,0-1-0.4-1-1V38.2c0-3.7-0.2-4.9-0.4-5.3     c-0.2-0.7-0.6-1.2-1.1-1.5c-0.5-0.4-1.1-0.5-1.8-0.5c-1,0-1.9,0.3-2.6,0.8c-0.8,0.6-1.3,1.3-1.6,2.2c-0.2,0.7-0.5,2.3-0.5,5.9V52     c0,0.6-0.4,1-1,1h-8.6c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1v1.5c2.3-2.1,5-3.1,8.2-3.1     c1.8,0,3.4,0.3,4.9,1c1.5,0.6,2.7,1.5,3.5,2.5c0.8,1,1.3,2.2,1.6,3.4c0.3,1.2,0.4,2.9,0.4,5.1V52C53,52.6,52.6,53,52,53z      M45.9,51H51V34.9c0-2-0.1-3.6-0.4-4.7c-0.2-1-0.7-1.9-1.3-2.7c-0.6-0.8-1.5-1.4-2.7-1.9c-1.2-0.5-2.6-0.8-4.1-0.8     c-3.4,0-6.2,1.4-8.4,4.3c-0.3,0.3-0.7,0.5-1.1,0.3c-0.4-0.1-0.7-0.5-0.7-0.9v-3.1h-5.1V51h6.6V39.8c0-3.2,0.2-5.3,0.6-6.5     c0.4-1.3,1.2-2.4,2.3-3.2c1.1-0.8,2.4-1.2,3.8-1.2c1.1,0,2.1,0.3,3,0.9c0.8,0.6,1.4,1.4,1.8,2.5c0.2,0.6,0.5,1.9,0.5,6V51z      M19.1,53H12c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1V52C20.1,52.6,19.7,53,19.1,53z M13,51h5.1V25.4H13V51z      M15.6,19.9c-2.5,0-4.6-2-4.6-4.4s2.1-4.4,4.6-4.4s4.6,2,4.6,4.4S18.1,19.9,15.6,19.9z M15.6,13c-1.4,0-2.6,1.1-2.6,2.4     s1.2,2.4,2.6,2.4s2.6-1.1,2.6-2.4S17,13,15.6,13z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://i.ibb.co/wRQ8BmL/5.jpg"
                      alt="Tomas"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Tomas Caruana
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    UX Designer
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tomas-caruana/"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 64 64"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-linkedin"
                        >
                          <path d="M58,63H6c-2.8,0-5-2.2-5-5V6c0-2.8,2.2-5,5-5h52c2.8,0,5,2.2,5,5v52C63,60.8,60.8,63,58,63z M6,3C4.3,3,3,4.3,3,6v52     c0,1.7,1.3,3,3,3h52c1.7,0,3-1.3,3-3V6c0-1.7-1.3-3-3-3H6z M52,53h-7.1c-0.6,0-1-0.4-1-1V38.2c0-3.7-0.2-4.9-0.4-5.3     c-0.2-0.7-0.6-1.2-1.1-1.5c-0.5-0.4-1.1-0.5-1.8-0.5c-1,0-1.9,0.3-2.6,0.8c-0.8,0.6-1.3,1.3-1.6,2.2c-0.2,0.7-0.5,2.3-0.5,5.9V52     c0,0.6-0.4,1-1,1h-8.6c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1v1.5c2.3-2.1,5-3.1,8.2-3.1     c1.8,0,3.4,0.3,4.9,1c1.5,0.6,2.7,1.5,3.5,2.5c0.8,1,1.3,2.2,1.6,3.4c0.3,1.2,0.4,2.9,0.4,5.1V52C53,52.6,52.6,53,52,53z      M45.9,51H51V34.9c0-2-0.1-3.6-0.4-4.7c-0.2-1-0.7-1.9-1.3-2.7c-0.6-0.8-1.5-1.4-2.7-1.9c-1.2-0.5-2.6-0.8-4.1-0.8     c-3.4,0-6.2,1.4-8.4,4.3c-0.3,0.3-0.7,0.5-1.1,0.3c-0.4-0.1-0.7-0.5-0.7-0.9v-3.1h-5.1V51h6.6V39.8c0-3.2,0.2-5.3,0.6-6.5     c0.4-1.3,1.2-2.4,2.3-3.2c1.1-0.8,2.4-1.2,3.8-1.2c1.1,0,2.1,0.3,3,0.9c0.8,0.6,1.4,1.4,1.8,2.5c0.2,0.6,0.5,1.9,0.5,6V51z      M19.1,53H12c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1V52C20.1,52.6,19.7,53,19.1,53z M13,51h5.1V25.4H13V51z      M15.6,19.9c-2.5,0-4.6-2-4.6-4.4s2.1-4.4,4.6-4.4s4.6,2,4.6,4.4S18.1,19.9,15.6,19.9z M15.6,13c-1.4,0-2.6,1.1-2.6,2.4     s1.2,2.4,2.6,2.4s2.6-1.1,2.6-2.4S17,13,15.6,13z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://i.ibb.co/5xvkNFD/blank-profile-picture-g969152f00-1280.png"
                      alt="User"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Alben Bustamante
                  </div>
                  <p className="text-gray-800 text-sm text-center">Backend</p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://github.com/alnicode"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alben-bustamante/"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 64 64"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-linkedin"
                        >
                          <path d="M58,63H6c-2.8,0-5-2.2-5-5V6c0-2.8,2.2-5,5-5h52c2.8,0,5,2.2,5,5v52C63,60.8,60.8,63,58,63z M6,3C4.3,3,3,4.3,3,6v52     c0,1.7,1.3,3,3,3h52c1.7,0,3-1.3,3-3V6c0-1.7-1.3-3-3-3H6z M52,53h-7.1c-0.6,0-1-0.4-1-1V38.2c0-3.7-0.2-4.9-0.4-5.3     c-0.2-0.7-0.6-1.2-1.1-1.5c-0.5-0.4-1.1-0.5-1.8-0.5c-1,0-1.9,0.3-2.6,0.8c-0.8,0.6-1.3,1.3-1.6,2.2c-0.2,0.7-0.5,2.3-0.5,5.9V52     c0,0.6-0.4,1-1,1h-8.6c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1v1.5c2.3-2.1,5-3.1,8.2-3.1     c1.8,0,3.4,0.3,4.9,1c1.5,0.6,2.7,1.5,3.5,2.5c0.8,1,1.3,2.2,1.6,3.4c0.3,1.2,0.4,2.9,0.4,5.1V52C53,52.6,52.6,53,52,53z      M45.9,51H51V34.9c0-2-0.1-3.6-0.4-4.7c-0.2-1-0.7-1.9-1.3-2.7c-0.6-0.8-1.5-1.4-2.7-1.9c-1.2-0.5-2.6-0.8-4.1-0.8     c-3.4,0-6.2,1.4-8.4,4.3c-0.3,0.3-0.7,0.5-1.1,0.3c-0.4-0.1-0.7-0.5-0.7-0.9v-3.1h-5.1V51h6.6V39.8c0-3.2,0.2-5.3,0.6-6.5     c0.4-1.3,1.2-2.4,2.3-3.2c1.1-0.8,2.4-1.2,3.8-1.2c1.1,0,2.1,0.3,3,0.9c0.8,0.6,1.4,1.4,1.8,2.5c0.2,0.6,0.5,1.9,0.5,6V51z      M19.1,53H12c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1V52C20.1,52.6,19.7,53,19.1,53z M13,51h5.1V25.4H13V51z      M15.6,19.9c-2.5,0-4.6-2-4.6-4.4s2.1-4.4,4.6-4.4s4.6,2,4.6,4.4S18.1,19.9,15.6,19.9z M15.6,13c-1.4,0-2.6,1.1-2.6,2.4     s1.2,2.4,2.6,2.4s2.6-1.1,2.6-2.4S17,13,15.6,13z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://i.ibb.co/5xvkNFD/blank-profile-picture-g969152f00-1280.png"
                      alt="User"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Victor Olivera
                  </div>
                  <p className="text-gray-800 text-sm text-center">Frontend</p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://github.com/oliveravictor"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/victor-olivera/"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 64 64"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-linkedin"
                        >
                          <path d="M58,63H6c-2.8,0-5-2.2-5-5V6c0-2.8,2.2-5,5-5h52c2.8,0,5,2.2,5,5v52C63,60.8,60.8,63,58,63z M6,3C4.3,3,3,4.3,3,6v52     c0,1.7,1.3,3,3,3h52c1.7,0,3-1.3,3-3V6c0-1.7-1.3-3-3-3H6z M52,53h-7.1c-0.6,0-1-0.4-1-1V38.2c0-3.7-0.2-4.9-0.4-5.3     c-0.2-0.7-0.6-1.2-1.1-1.5c-0.5-0.4-1.1-0.5-1.8-0.5c-1,0-1.9,0.3-2.6,0.8c-0.8,0.6-1.3,1.3-1.6,2.2c-0.2,0.7-0.5,2.3-0.5,5.9V52     c0,0.6-0.4,1-1,1h-8.6c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1v1.5c2.3-2.1,5-3.1,8.2-3.1     c1.8,0,3.4,0.3,4.9,1c1.5,0.6,2.7,1.5,3.5,2.5c0.8,1,1.3,2.2,1.6,3.4c0.3,1.2,0.4,2.9,0.4,5.1V52C53,52.6,52.6,53,52,53z      M45.9,51H51V34.9c0-2-0.1-3.6-0.4-4.7c-0.2-1-0.7-1.9-1.3-2.7c-0.6-0.8-1.5-1.4-2.7-1.9c-1.2-0.5-2.6-0.8-4.1-0.8     c-3.4,0-6.2,1.4-8.4,4.3c-0.3,0.3-0.7,0.5-1.1,0.3c-0.4-0.1-0.7-0.5-0.7-0.9v-3.1h-5.1V51h6.6V39.8c0-3.2,0.2-5.3,0.6-6.5     c0.4-1.3,1.2-2.4,2.3-3.2c1.1-0.8,2.4-1.2,3.8-1.2c1.1,0,2.1,0.3,3,0.9c0.8,0.6,1.4,1.4,1.8,2.5c0.2,0.6,0.5,1.9,0.5,6V51z      M19.1,53H12c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1V52C20.1,52.6,19.7,53,19.1,53z M13,51h5.1V25.4H13V51z      M15.6,19.9c-2.5,0-4.6-2-4.6-4.4s2.1-4.4,4.6-4.4s4.6,2,4.6,4.4S18.1,19.9,15.6,19.9z M15.6,13c-1.4,0-2.6,1.1-2.6,2.4     s1.2,2.4,2.6,2.4s2.6-1.1,2.6-2.4S17,13,15.6,13z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://i.ibb.co/Y3V3NPM/tl.jpg"
                      alt="Rene"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Rene Silva
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Team Leader
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://www.linkedin.com/in/vmc555/"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://github.com/vmc555"
                      target={'_blank'}
                      className="mx-5"
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 64 64"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-linkedin"
                        >
                          <path d="M58,63H6c-2.8,0-5-2.2-5-5V6c0-2.8,2.2-5,5-5h52c2.8,0,5,2.2,5,5v52C63,60.8,60.8,63,58,63z M6,3C4.3,3,3,4.3,3,6v52     c0,1.7,1.3,3,3,3h52c1.7,0,3-1.3,3-3V6c0-1.7-1.3-3-3-3H6z M52,53h-7.1c-0.6,0-1-0.4-1-1V38.2c0-3.7-0.2-4.9-0.4-5.3     c-0.2-0.7-0.6-1.2-1.1-1.5c-0.5-0.4-1.1-0.5-1.8-0.5c-1,0-1.9,0.3-2.6,0.8c-0.8,0.6-1.3,1.3-1.6,2.2c-0.2,0.7-0.5,2.3-0.5,5.9V52     c0,0.6-0.4,1-1,1h-8.6c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1v1.5c2.3-2.1,5-3.1,8.2-3.1     c1.8,0,3.4,0.3,4.9,1c1.5,0.6,2.7,1.5,3.5,2.5c0.8,1,1.3,2.2,1.6,3.4c0.3,1.2,0.4,2.9,0.4,5.1V52C53,52.6,52.6,53,52,53z      M45.9,51H51V34.9c0-2-0.1-3.6-0.4-4.7c-0.2-1-0.7-1.9-1.3-2.7c-0.6-0.8-1.5-1.4-2.7-1.9c-1.2-0.5-2.6-0.8-4.1-0.8     c-3.4,0-6.2,1.4-8.4,4.3c-0.3,0.3-0.7,0.5-1.1,0.3c-0.4-0.1-0.7-0.5-0.7-0.9v-3.1h-5.1V51h6.6V39.8c0-3.2,0.2-5.3,0.6-6.5     c0.4-1.3,1.2-2.4,2.3-3.2c1.1-0.8,2.4-1.2,3.8-1.2c1.1,0,2.1,0.3,3,0.9c0.8,0.6,1.4,1.4,1.8,2.5c0.2,0.6,0.5,1.9,0.5,6V51z      M19.1,53H12c-0.6,0-1-0.4-1-1V24.4c0-0.6,0.4-1,1-1h7.1c0.6,0,1,0.4,1,1V52C20.1,52.6,19.7,53,19.1,53z M13,51h5.1V25.4H13V51z      M15.6,19.9c-2.5,0-4.6-2-4.6-4.4s2.1-4.4,4.6-4.4s4.6,2,4.6,4.4S18.1,19.9,15.6,19.9z M15.6,13c-1.4,0-2.6,1.1-2.6,2.4     s1.2,2.4,2.6,2.4s2.6-1.1,2.6-2.4S17,13,15.6,13z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
