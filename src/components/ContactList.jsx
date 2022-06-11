import React from 'react'
import Contact from './Contact'

const ContactList = ({contacts}) => {

    return (
    <>
        <h1>Lista de contactos</h1>
        {
            contacts.map((contact, i) => (
                <Contact key={i} contact={contact} />
            ))
        }
    </>
  )
}

export default ContactList