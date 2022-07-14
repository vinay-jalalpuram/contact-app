import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactHandler(id);  
    };

    const contacts_temp = [ {
        id: "1",
        name: "vinay",
        email: "vinay.J"
    },{
        id: "2",
        name: "sures",
        email: "sures.J"
    },{
        id: "3",
        name: "Rakesh",
        email: "Rakesh.J"
    },{
        id: "4",
        name: "mannu",
        email: "mannu.J"
    }];

    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard key={contact.email} contact={contact} getContactId={deleteContactHandler} />;
    });    

    return (
        <div className="main" style={{marginTop:"50px"}}>
            <h2>Contact List   </h2> 
            <Link to="/add">
            <button className="ui button blue right">Add contact</button>
            </Link>
            
        <div className="ui celled list">
            {renderContactList}
        </div>
        </div>

        
    );

};

export default ContactList;
