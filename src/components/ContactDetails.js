import React from "react";
import userImg from "../images/favicon.ico"
import { Link } from "react-router-dom";
import user from "../images/user.png"

const ContactDetails = (props) => {

        
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user image" />
                </div>
                <div className="content">
                    <div className="header">
                         Vinay.J
                    </div >
                    <div className="description">
                        vinay.jalalpuram@gmail.com
                    </div>
                </div>

            </div>

            <Link to="/">
            <button  className="ui button blue center">Back to contact list</button>
            </Link>

        </div>
    );
};

export default ContactDetails;