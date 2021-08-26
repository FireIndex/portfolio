import React from 'react'
// import { NavLink } from 'react-router-dom'

const ImagesImg = (props) => {
  const url_img = `https://source.unsplash.com/${props.quality}/?${props.search}`
  return (
    <>
      <figure>
        <img className='rounded' src={url_img} alt={url_img} />
      </figure>
    </>
  )
}
export default ImagesImg
