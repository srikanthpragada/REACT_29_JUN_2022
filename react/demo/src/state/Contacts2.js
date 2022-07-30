import React, { useState } from 'react'

export default function Contacts() {
  let [contacts, setContacts] = useState([])

  function addNewContact(newContact) {
    // add new contact to contacts 
    let contact = contacts.find( (c) => c.name === newContact.name && c.email === newContact.email)
    if(contact) // found an existing contact with same details
      alert("Sorry! Duplicate Contact!")
    else
      setContacts([...contacts, { ...newContact }])
  }

  function deleteContact(idxToDelete) {
    if (window.confirm("Do you want to delete?")) {
      let newContacts = contacts.filter((c, idx) => idx !== idxToDelete);
      setContacts(newContacts)
    }
  }

  return (
    <>
      <h1>Contacts</h1>
      <AddContact add={addNewContact} />
      <p></p>
      {contacts.length > 0 ?
        <ListContacts contacts={contacts}
          deleteContact={deleteContact} />
        : <h3 className="text-danger">No contacts!</h3>
      }
    </>
  )
}

function ListContacts({ contacts, deleteContact }) {
  return (
    <>
      <h5>No. of contacts = {contacts.length}</h5>
      <table className="table table-bordered">
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            contacts.map(
              (c, idx) =>
                <tr key={idx}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td><button onClick={() => deleteContact(idx)}>Delete</button></td>
                </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}


function AddContact({ add }) {
  let [contact, setContact] = useState({ name: '', email: '' })

  /*
  function updateName(e) {
    setContact({ ...contact, name: e.target.value })
  }

  function updateEmail(e) {
    setContact({ ...contact, email: e.target.value })
  }
*/
  function clearAll(e) {
     e.preventDefault()
     setContact( { name :'', email : ''})
  }
  function addContact(e) {
    e.preventDefault()
    add(contact)    // Call addNewContact in parent component 
  }

  function updateText(e) {
     let name = e.target.name   // get name of control
     let value = e.target.value  // get value of control 
     setContact( { ...contact, [name] : value})
  }

  return (
    <>
    <form className="d-inline-block" onSubmit={addContact}>
      Name : <input type="text" name="name" value={contact.name}
        onChange={updateText} required />
      Email : <input type="email" name="email" value={contact.email}
        onChange={updateText} required />
      <button className="ms-2">Add</button>
    </form>
    <button onClick={clearAll} className="ms-2">Clear</button> 
    </>
  )


}