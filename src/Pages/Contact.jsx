import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import ContForm from '../Pages/Compo/ContForm'

const Contact = () => {
  toast.warn(
    '🔔 Hello, first fill all the details then submit button appear !!!',
    {
      position: 'bottom-right',
    }
  )

  return (
    <>
      <ToastContainer />
      <section className='container mt-5'>
        <div className='row'>
          <h1 className='text-black text-capitalize text-center fw-bold'>
            Contact me
          </h1>
        </div>

        <div className='row mt-3'>
          <div className='d-flex mx-auto col-lg-8 col-10'>
            <ContForm />
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact
