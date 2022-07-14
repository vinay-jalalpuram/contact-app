import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router ,Routes,Switch, Route } from 'react-router-dom';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuid } from 'uuid';
import DemoApp from './DemoApp';

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
    let idVal = uuid();
    setContacts([...contacts, { id: idVal, ...contact }]);
  };

  /*
    *********** THIS IS NOT NEEDED ***********
    useEffect(() => {
    console.log("Loading existing contacts");
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);
  */

  const deleteContactHandler = (id) => {
      let newContactList = contacts.filter((contact) => {
          return contact.id !== id;
      });
      setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Router>
         <Header />
         <Routes>                    
         <Route path="/" exact element={<ContactList getContactHandler={deleteContactHandler} contacts={contacts} />}></Route>
          <Route path="/add" exact element={<AddContact addContactHandler={addContactHandler} />}></Route>
          
        </Routes>  
      </Router>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactHandler={deleteContactHandler} /> */}
      <DemoApp></DemoApp>
    </div>
  );
}

export default App;
