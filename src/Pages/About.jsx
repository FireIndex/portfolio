import React from 'react'
import { NavLink } from 'react-router-dom'
import Experience from '../Pages/Compo/Experience'
import Aboutdata from '../Pages/Compo/Aboutdata'
import Dev from '../Img/About5.jpg'

const About = () => {
  return (
    <>
      <section className='container mt-5'>
        <div className='row'>
          <h1 className='text-black text-capitalize text-center fw-bold'>
            About me
          </h1>
          <p className='text-secondary text-center'>My introduction</p>
        </div>

        <div className='row mt-5 gx-0'>
          <div className='d-flex mx-auto col-lg-6'>
            <figure className=' mx-auto'>
              <img
                className='img-fluid rounded'
                src={Dev}
                alt={Dev}
                style={{ maxHeight: '270px' }}
              />
            </figure>
          </div>

          <div className='col-lg-6 pt-1'>
            <div className='row'>
              <div className='col-lg-8 col-11 text-secondary text-center'>
                <span className='fs-1 bg-black text-light rounded-3'>W</span>
                eb developer, with extensive Knowledge and five year of
                experience, working in web technologies and Python language,
                delivering quality{' '}
                <NavLink to='/Contact' className=' text-danger'>
                  work
                </NavLink>
              </div>
              <div className=' mt-5 col-lg-8 '>
                <div className='row'>
                  <div className='d-flex'>
                    {Aboutdata.map((val, index) => {
                      return (
                        <>
                          <Experience
                            key={index}
                            expTime={val.expTime}
                            expField={val.expField}
                          />
                        </>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
