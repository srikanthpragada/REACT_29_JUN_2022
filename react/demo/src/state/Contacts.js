import React, {useState} from 'react'

export default function Contacts() {
   let [contact, setContact] = useState({ name :'', email : ''})

  function addContact(e)   {
       e.preventDefault()
       // add new contact to contacts 
  }

  function updateName(e) {
      setContact( {...contact, name : e.target.value}) 
  }

  return (
     <>
       <h1>Contacts</h1>
       <form onSubmit={addContact}>
        Name : <input type="text" value={contact.name} onChange={updateName} required />
        Email : <input type="email" value={contact.email}  required/>
        <button className="ms-2">Add</button>
       </form>
     </>
  )
}
