import React from "react";

const WelcomeMessage = (props) => {
    {  console.log(props.message)  }  
    return (        
        <div> Welcome : {props.message} </div>
    );
}

export default WelcomeMessage;