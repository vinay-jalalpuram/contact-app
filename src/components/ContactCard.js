import React from "react";
import userImg from "../images/favicon.ico"

const ContactCard = (props) => {

    const {id,name,email} = props.contact;
    return (
    <div className="item">
        <img className="ui avatar image" src={userImg} alt="user image" ></img>
        <div className="content">
            <div className="header">{name}</div>
            <div >{email}</div>
        </div>
            <i style={{color: "red", marginTop: "5px"}} className="trash alternate outline icon"> </i>                
    </div>
    );
};

export default ContactCard;