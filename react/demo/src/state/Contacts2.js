import React, { useState } from 'react'

export default function Contacts() {
  let [contacts, setContacts] = useState([])


  function addNewContact(contact) {
    // add new contact to contacts 
    setContacts([...contacts, { ...contact }])
  }


  function deleteContact(idxToDelete) {
    let newContacts = contacts.filter((c, idx) => idx !== idxToDelete);
    setContacts(newContacts)
  }

  return (
    <>
      <h1>Contacts</h1>
      <AddContact  add={addNewContact}/>
      <p></p>
      <ListContacts />
      <p></p>
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

function ListContacts() {
  
}


function AddContact({add}) {
  let [contact, setContact] = useState({ name: '', email: '' })

  function updateName(e) {
    setContact({ ...contact, name: e.target.value })
  }

  function updateEmail(e) {
    setContact({ ...contact, email: e.target.value })
  }

  function addContact(e) {
      e.preventDefault() 
      add(contact)    // Call addNewContact in parent component 
  }

  return (
    <form onSubmit={addContact}>
      Name : <input type="text" value={contact.name}
        onChange={updateName} required />
      Email : <input type="email" value={contact.email}
        onChange={updateEmail} required />
      <button className="ms-2">Add</button>
    </form>

  )


}