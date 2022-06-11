import React, { useState } from 'react'
import { addContact } from '../contactServices'
import { validateForm } from '../validateAddContactForm';

const AddContact = ({setContactListMode, contacts, setContacts}) => {
  
  const [ errorMessage, setErrorMessage ] = useState(null);
  const [ name, setName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ phone, setPhone ] = useState("");

  const addContactHandler = (e) => {
    
    e.preventDefault();

    const contactToAdd = { nombre: name, apellido: lastName, telefono: phone}

    const formValidation = validateForm(contactToAdd);

    if(formValidation === true){
      addContact(contactToAdd).then(contact => {
        setContacts([...contacts, contact])
        setContactListMode(true);
      })
    }else{
      setErrorMessage(formValidation)
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }
  
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  return (
    <>
      <form onSubmit={addContactHandler}>
        
        <input 
            type="text" 
            name='nombre' 
            placeholder='Nombre'
            value={name}
            onChange={handleNameChange}
        />
        
        <input 
            type="text" 
            name='apellido' 
            placeholder='Apellido'
            value={lastName} 
            onChange={handleLastNameChange}
        />
        
        <input 
            type="text" 
            name='telefono' 
            placeholder='Teléfono'
            value={phone}
            onChange={handlePhoneChange}
        />

        {
          errorMessage && <div><p>{errorMessage}</p></div>
        }
        
        <button>Agregar Contacto</button>
        <button onClick={() => setContactListMode(true) }>Volver</button>
      </form>
    </>
  )
}

export default AddContact