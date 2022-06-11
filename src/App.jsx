import React, { useEffect, useState } from 'react'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import Header from './components/Header'
import { getContacts } from './contactServices'

const App = () => {

    const [ isContactListMode, setContactListMode ] = useState(true);
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        getContacts().then(data => {
            setContacts([...data])
        })
    }, [])

    return (
    <>
        <Header setContactListMode={setContactListMode} />

        { isContactListMode 
            ?  <ContactList contacts={contacts} />
            :  <AddContact 
                  setContactListMode={setContactListMode}
                  contacts={contacts}
                  setContacts={setContacts} 
                />
        }
    </>
  )
}

export default App