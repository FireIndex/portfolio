import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <section className='container'>
        <nav className='navbar navbar-expand-lg navbar-light '>
          <div className='container'>
            <div
              className='d-flex align-baseline mt-3  position-relative'
              style={{ right: '20px' }}
            >
              <button
                className='navbar-toggler border-0 me-3'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <NavLink className='navbar-brand' to='/'>
                Brand
              </NavLink>
            </div>
            <div
              className='collapse navbar-collapse mt-3'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item mx-2 my-1'>
                  <NavLink
                    className='nav-links text-decoration-none text-secondary'
                    exact
                    activeClassName='text-danger fw-bolder'
                    to='/'
                  >
                    Home
                  </NavLink>
                </li>
                <li className='nav-item mx-2 my-1'>
                  <NavLink
                    className='nav-links text-decoration-none text-secondary'
                    exact
                    activeClassName='text-danger fw-bolder'
                    to='/Service'
                  >
                    Service
                  </NavLink>
                </li>
                <li className='nav-item mx-2 my-1'>
                  <NavLink
                    className='nav-links text-decoration-none text-secondary'
                    exact
                    activeClassName='text-danger fw-bolder'
                    to='/About'
                  >
                    About
                  </NavLink>
                </li>
                <li className='nav-item mx-2 my-1'>
                  <NavLink
                    className='nav-links text-decoration-none text-secondary'
                    exact
                    activeClassName='text-danger fw-bolder'
                    to='/Contact'
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}
export default Menu
