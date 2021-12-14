import React, { Component } from "react";

class Formulario extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const age = event.target.elements.age.value;
    const picture = event.target.elements.picture.value;
    console.log("Estos son los datos del form:", name, email, age, picture)
    // this.setState({name: name, email: email, age: age, picture: picture})
    this.props.updateCard(name, email, age, picture)
  }

  render() {
    return <div>
              <form onSubmit={this.handleSubmit}>
                  <label htmlFor="name">Nombre:</label><br/>
                  <input type="text" name="name"/><br />
                  <label htmlFor="email">Email:</label><br/>
                  <input type="email" name="email"/><br/>
                  <label htmlFor="age">Edad:</label><br/>
                  <input type="number" name="age"/><br />
                  <label htmlFor="picture">Imagen:</label><br />
                  <input type="url" name="picture"/><br />
                  <input type="submit"/>
              </form>
          </div>;
  }
}

export default Formulario;
