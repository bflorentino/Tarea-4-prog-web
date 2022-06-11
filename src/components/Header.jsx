import React from 'react'

const Header = ({setContactListMode}) => {
  
  const openAddContacts = (e) => {
    setContactListMode(false);
  }

  return (
    <div>
      <button onClick={openAddContacts}>Nuevo Contacto</button>
    </div>
  )
}

export default Header