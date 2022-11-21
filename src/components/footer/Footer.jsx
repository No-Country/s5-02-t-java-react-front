import React from 'react'
import { AiFillUpCircle, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { RiInstagramLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <div>
      <footer className="text-white py-4 mt-5 fixed-bottom bg-dark">
        <div className="container d-flex  mb-4">
          <ul className="col-12 col-md-3 me-auto mt-3 list-unstyled">
            <li className="text-start">
              Copyright © 2022. “lalala” Eventos. All rights reserved.
            </li>
          </ul>
          <ul className="col-12 col-md-2 list-unstyled">
            <li className="text-warning fw-bold fs-5 mb-2">Services</li>
            <li>Monthly plan</li>
            <li>Empresas</li>
          </ul>
          <ul className="col-12 col-md-2 list-unstyled">
            <li className="text-warning fw-bold fs-5 mb-2">About</li>
            <li>Out Story</li>
            <li>Team</li>
          </ul>
          <ul className="col-12 col-md-3 list-unstyled">
            <li className="d-flex flex-row justify-content-around ms-5 text-warning fs-1 mb-5">
              {' '}
              <AiFillUpCircle />
            </li>
            <li className="d-flex flex-row justify-content-center mt-5">
              <FaFacebookF className="me-2 ms-4 fs-4" />
              <AiOutlineTwitter className="me-2 ms-4 fs-4" />
              <RiInstagramLine className="me-2 ms-4 fs-4" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
