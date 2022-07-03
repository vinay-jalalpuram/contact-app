import React from "react";

class AddContact extends React.Component {

    state = {
        name: "",
        email: ""
    };

    add = (e) => {
        e.preventDefault();
        console.log('Entere add method...');
        if (this.state.name == "" || this.state.email == "") {
            alert('Invalid input entered');
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    };

    render() {
        return (
            <div className="ui main">
                <h1> Add Contact</h1>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name}
                            placeholder="Name" onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email}
                            placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;