import React from 'react'
import Contact from './Contact'

const ContactList = ({contacts}) => {

    return (
    <>
    <div className='list'>
        <h1 className='title'>Lista de contactos</h1>
        {
            contacts.map((contact, i) => (
                <Contact key={i} contact={contact} />
            ))
        }
    </div>
    </>
  )
}

export default ContactList