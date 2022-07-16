import React from "react";
import userImg from "../images/favicon.ico"
import { Link } from "react-router-dom";

const ContactCard = (props) => {

    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={userImg} alt="user image" ></img>
            <div className="content">
                <Link to={{pathname:`contact/${id}`}}>
                <div className="header">{name}</div>
                <div >{email}</div>
                </Link>
            </div>
            <i style={{ color: "red", marginTop: "5px" }} className="trash alternate outline icon" onClick={() => props.getContactId(id)} > </i>
        </div>
    );
};

export default ContactCard;