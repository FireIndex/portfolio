import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const ContForm = (props) => {
  const [input, setInput] = useState({
    fname: '',
    email: '',
    city: '',
    message: '',
  })

  let name, value
  const inputEvent = (event) => {
    name = event.target.name
    value = event.target.value

    setInput({ ...input, [name]: value })
  }

  const onSubmits = (event) => {
    event.preventDefault()

    var { fname, email, city, message } = input

    const res = fetch(
      'https://personalportfolio-d457b-default-rtdb.firebaseio.com/contact.json',
      {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fname,
          email,
          city,
          message,
        }),
      }
    )
    if (res) {
      setInput({
        fname: '',
        email: '',
        city: '',
        message: '',
      })
      toast('🎈 Request send successfully!')
    } else {
      toast.error('Request fail!')
    }
  }

  return (
    <>
      <form
        onSubmit={onSubmits}
        method='POST'
        className='mx-auto w-100 text-secondary'
      >
        <div className='mb-3'>
          <label htmlFor='TextInput' className='form-label'>
            Name
          </label>
          <input
            type='text'
            id='TextInput'
            name='fname'
            onChange={inputEvent}
            className='form-control'
            placeholder='Enter your name...'
            value={input.fname}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='InputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            name='email'
            id='InputEmail1'
            onChange={inputEvent}
            aria-describedby='emailHelp'
            placeholder='Enter your email'
            value={input.email}
          />
          <div id='emailHelp' className='form-text text-danger'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='DataList' className='form-label'>
            City
          </label>
          <input
            className='form-control'
            list='datalistOptions'
            name='city'
            id='DataList'
            onChange={inputEvent}
            placeholder='Enter city name...'
            value={input.city}
          />
          <datalist id='datalistOptions'>
            <option value='Delhi' />
            <option value='Noida' />
            <option value='Mumbai' />
            <option value='Kolkata' />
            <option value='chennai' />
          </datalist>
        </div>
        <div className='mb-3'>
          <label htmlFor='FormControlTextarea1' className='form-label'>
            textarea
          </label>
          <textarea
            className='form-control'
            id='FormControlTextarea1'
            onChange={inputEvent}
            name='message'
            rows='5'
            value={input.message}
          ></textarea>
        </div>
        {input.fname === '' ||
        input.email === '' ||
        input.city === '' ||
        input.message === '' ? null : (
          <button
            type='submit'
            className='btn btn-sm mb-5 fs-6 btn-danger text-light'
          >
            Submit
          </button>
        )}
        <ToastContainer />
      </form>
    </>
  )
}
export default ContForm
