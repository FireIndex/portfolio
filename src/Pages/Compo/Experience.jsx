import React from 'react'

const Experience = (props) => {
  return (
    <>
      <div className='col-4'>
        <div className='d-flex flex-column text-start justify-content-between'>
          <span className='fw-bold text-black text-center h4 d-flex justify-content-center'>
            {props.expTime}
          </span>
          <p className='fs-6 d-flex text-secondary lh-sm text-center d-flex justify-content-center'>
            {props.expField}
          </p>
        </div>
      </div>
    </>
  )
}
export default Experience
