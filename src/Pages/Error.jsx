import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div
        className=' d-flex flex-column justify-content-center align-items-center'
        style={{ height: '89vh', maxWidth: '100vw' }}
      >
        <h1
          className=' display-1 fst-italic fw-bolder'
          style={{
            fontFamily: '"Mulish", sans-serif',
            fontSize: '120px',
            color: '#F65058',
          }}
        >
          Oops!
        </h1>
        <h5 className='fw-bold fs-6 mt-4'>404 | Page not found</h5>
        <p className=' mt-1 col-lg-5 col-xl-4 col-xxl-3 col-10 text-secondary text-center'>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <div className='d-flex justify-content-between'>
          <button className='mt-1 me-3 border-0 rounded-3 bg-dark'>
            <NavLink to='/' className='text-light fs-5 text-decoration-none'>
              Home
            </NavLink>
          </button>
          <button className='mt-1 ms-3 border-0 rounded-3 bg-dark'>
            <NavLink
              to='/Contact'
              className='text-light fs-5 text-decoration-none'
            >
              Contact
            </NavLink>
          </button>
        </div>
      </div>
    </>
  )
}
export default Error
