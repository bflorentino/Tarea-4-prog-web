import React from 'react'

const Contact = ({contact}) => {
  return (
    <div>
        <p>{contact.nombre}</p>
        <p>{contact.apellido}</p>
        <p>{contact.telefono}</p>
    </div>
  )
}

export default Contact