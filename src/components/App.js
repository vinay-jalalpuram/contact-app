import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { uuid } from 'uuidv4';

const LOCAL_STORAGE_KEY = 'contacts';

function App() {

  const contactJson = [
      {
        id:"1",
        "name": "Vinay",
        "email": "test@gmail.com",
      },
      {
        id:"2",
        "name": "Vinay",
        "email": "test@gmail.com",
      },
      {
        id:"3",
        "name": "Vinay",
        "email": "test@gmail.com",
      },
      {
        id:"4",
        "name": "Vinay",
        "email": "test@gmail.com",
      },
      {
        id:"5",
        "name": "Vinay",
        "email": "test@gmail.com",
      }
  ];

  const [contacts,setContacts] = useState([]); // created fn component hook with empty array as its value.
  
  
  const addContactHandler = (contact) => {
        console.log('Contact recieved in App comp '+ contact);
        setContacts([...contacts,contact]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));  
    if(retrieveContacts) setContacts(retrieveContacts);    
 }, []);

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
