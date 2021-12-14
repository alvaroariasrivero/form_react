import React, { Component, Fragment } from "react";

class Card extends Component {
    
  render() {
    const data = this.props.data
    return <Fragment>
              <p>Nombre: {data.name}</p>
              <p>Email: {data.email}</p>
              <p>Edad: {data.age}</p>
              <img src={data.picture} alt="imagen"/>
          </Fragment>;
  }
}

export default Card;
