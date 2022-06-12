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
        alert("El contacto se ha agregado exitosamente")
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
    <div className='form-container'>
      <h1>Agregar nuevo contacto</h1>
      <form onSubmit={addContactHandler} className="form-add-contact">
        
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
          errorMessage && <div className='error'><p>{errorMessage}</p></div>
        }
        
        <button className='green'>Agregar Contacto</button>
        <button className='red' onClick={() => setContactListMode(true) }>Volver</button>
      </form>

    </div>
    </>
  )
}

export default AddContact