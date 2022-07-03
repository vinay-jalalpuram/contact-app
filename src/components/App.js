import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { uuid } from 'uuidv4';

const LOCAL_STORAGE_KEY = 'contacts';

function App() {

  const [contacts, setContacts] = useState(() => {
    /**
     * Initializing State here before render of the component
     */
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return retrieveContacts != null ? retrieveContacts : [];
  });

  const addContactHandler = (contact) => {
    console.log('Contact recieved in App comp ' + contact);
    setContacts([...contacts, contact]);
  };

  /*
    *********** THIS IS NOT NEEDED ***********
    useEffect(() => {
    console.log("Loading existing contacts");
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);
  */

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
