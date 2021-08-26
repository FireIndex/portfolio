import React, { useState } from 'react'
import ImagesImg from './ImagesImg'

const ImagesInp = () => {
  //   Start
  const [input, setInput] = useState('')
  const [num, setNum] = useState('640x424')

  const getVal = (event) => {
    setInput(event.target.value)
  }

  return (
    <>
      <div className='my-5 d-flex flex-row justify-content-center'>
        <input
          className='border-0 border-bottom text-center'
          type='text'
          placeholder='Search Images'
          value={input}
          onChange={getVal}
        />

        <select
          className='mx-4 border-0'
          value={num}
          onChange={(event) => {
            setNum(event.target.value)
          }}
        >
          <option value='640x424'>Small (640x424)</option>
          <option value='1920x1279'>Medium (1920x1279)</option>
          <option value='2400x1599'>Large (2400x1599) </option>
          <option value='720x1080'>Smart Phone (720x1080) </option>
        </select>
      </div>

      {/* Output Images */}

      <div className='d-flex justify-content-center'>
        {input === '' ? null : (
          <ImagesImg quality={num} search={input} className='my-5' />
        )}
      </div>
    </>
  )
}
export default ImagesInp
