import React from 'react'

const Header = ({setContactListMode}) => {
  
  const openAddContacts = (e) => {
    setContactListMode(false);
  }

  return (
    <header className='header'>
      <h1>Agenda de contactos</h1>
      <button onClick={openAddContacts}>Nuevo Contacto</button>
    </header>
  )
}

export default Header