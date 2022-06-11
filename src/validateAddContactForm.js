export const validateForm = (contact) => {
   
    const phoneRegEx = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm

    if(contact.nombre === "") return "Se requiere completar el campo de nombre";
    if(contact.apellido === "") return "Se requiere completar el campo de apellido";
    if(contact.telefono === "") return "Se requiere completar el campo del número telefónico";
    if(!phoneRegEx.test(contact.telefono)) return "El número de teléfono es inválido";

    return true;
}