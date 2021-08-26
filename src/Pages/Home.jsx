import React from 'react'
import { NavLink } from 'react-router-dom'
import Dev from '../Img/Home5.jpg'
const Home = () => {
  return (
    <>
      <section
        className='container d-flex justify-content-center align-items-center'
        style={{ height: '80vh' }}
      >
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-lg-10 col-12 d-flex justify-content-center'>
            <div className='row d-flex align-items-center justify-content-center gy-4'>
              <div className='col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                <h1 className='fw-bolder'>Hi, I'am Safari</h1>
                <h6 className=' fs-6 my-1 text-secondary'>
                  Frontend developer
                </h6>
                <p className='mt-3 text-secondary'>
                  High level experience in web designing and developement
                  knowledge, producing qual work.ity
                </p>
                <div className='row'>
                  <div className='col-4'>
                    <button
                      type='button'
                      className='mt-2 btn btn-sm btn-danger'
                    >
                      <NavLink
                        className='text-decoration-none text-light'
                        to='/About'
                      >
                        About Me
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2'>
                <figure>
                  <img
                    className='w-100 img-fluid rounded'
                    src={Dev}
                    alt='credit: freepik'
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
