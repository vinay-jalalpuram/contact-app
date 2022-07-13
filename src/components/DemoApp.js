import React from "react";
import WelcomeMessage from "./WelcomeMessage";

class DemoApp extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "vinay123",
            flag: false,
            list: []
        }
    }

    handleClick = () => {
         this.setState({ flag: !this.state.flag });   
         let listArr = this.state.list;
         listArr.pop();
         console.log('list arr ::: '+listArr);
         this.setState({ list: listArr});
    };

    componentDidMount() {
        console.log('Inside  component did mount ...');
        this.setState({ list: [1,2,3,4,5,6]});
    }

    greetings = () => {
         return "Good monring";   
    }

    render() {
        return (
           <div>
               { this.state.flag && <WelcomeMessage message={this.state.name}></WelcomeMessage> }               
               <button onClick={this.handleClick}> Display Message</button> 
               <span>{this.state.list.map((value) => {
                  return value;
               })}</span> 
               <div>{this.greetings()}</div>
           </div>);
    }
}

export default DemoApp;