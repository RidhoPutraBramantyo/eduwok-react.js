import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handlePlus = this.handlePlus.bind(this);
  }
  handlePlus() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <div>
        <h1>Komponen ini dibuat dengan class komponen</h1>
        <h2>hello {this.props.nama}</h2>
        <button onClick={this.handlePlus}>-</button>
        <span> {this.state.value} </span>
        <button>+</button>
      </div>
    );
  }
}

export default ClassComponent;
/* kekurangan class component:
- terlihat rumit, banyak yang harus ditulis dibandingkan functional component

>> kelebihannya :
- mempunyai sesuatu yang disebut state, functional component tak punya state.
- keduanya punya props baik class maupun functional component*/
