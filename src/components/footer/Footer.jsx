import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-white py-4 bg-dark">
        <div className="container d-flex">
          <ul className="col-12 col-md-3 me-auto mt-2 list-unstyled">
            <li className="text-center">
              Copyright © 2022. “lalala” Eventos. All rights reserved.
            </li>
          </ul>
          <ul className="col-12 col-md-3 list-unstyled">
            <li className="text-warning fw-bold fs-5 mb-2">Services</li>
            <li>Monthly plan</li>
            <li>Empresas</li>
          </ul>
          <ul className="col-12 col-md-3 list-unstyled">
            <li className="text-warning fw-bold fs-5 mb-2">About</li>
            <li>Out Story</li>
            <li>Team</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
