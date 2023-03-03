import React from 'react'

export default function MovieObject(props) {
  return (
    <div className="object">
      <p>Title: {props.title}</p>
      <p>Length: {props.lengthOfMovie}</p>
      <p>Description: {props.description}</p>
    </div>
  )
}
