import React, { useEffect, useState } from 'react'

const Contact = ({contact}) => {

  const [ avatar, setAvatar ] = useState(null);

  useEffect(()=> {

    const contactAvatar = `https://avatars.dicebear.com/api/initials/:${contact.nombre[0]}${contact.apellido[0]}.svg`;

    setAvatar(contactAvatar);

  }, [contact.nombre, contact.apellido])

  return (
    <div className='contact-container'>
        <div className='one-contact'>
          <img src={avatar} alt="" className='cAvatar' />
          <div className='cInfo'>
            <p className='cname'>{contact.nombre} {contact.apellido}</p>
            <p className='cphone'>{contact.telefono}</p>    
          </div>
        </div>
        <img src="../assets/imagenes/Phone.png" alt="" className='phIcon' />
    </div>
  )
}

export default Contact