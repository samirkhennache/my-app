import React, { Component } from 'react';

class Lamp extends Component {
    constructor(props) {
    super(props);
    this.state = {  
        on: props.on,
    };
    }
    HandelClick = () =>{
        this.setState({ on: !this.state.on });
    }
    render() {
    const light = this.state.on ? 'on' : 'off';
    return (
      <div className="Lamp">
        <button className={light} onClick ={ () =>this.HandelClick()}>{light.toUpperCase()}</button>
        <figure className={light} />
      </div>
    );
  }
}

export default Lamp;