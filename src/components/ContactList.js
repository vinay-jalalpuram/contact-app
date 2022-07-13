import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactHandler(id);  
    };

    const renderContactList = props.contacts && props.contacts.map((contact) => {
        return <ContactCard key={contact.email} contact={contact} getContactId={deleteContactHandler} />;
    });    

    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );

};

export default ContactList;
