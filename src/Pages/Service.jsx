import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import ImagesInp from './Compo/ImagesInp'

const Service = () => {
  // Start
  toast('Download For Free', {
    position: 'bottom-right',
  })

  return (
    <>
      <section className='container' style={{ maxWidth: '100vw' }}>
        <ToastContainer />
        <ImagesInp />
      </section>
    </>
  )
}
export default Service
