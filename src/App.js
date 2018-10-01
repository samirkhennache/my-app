import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from "./Quote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
         working:this.props.working,
          
    };
    }
    HandelClick =() =>{
      this.setState({working:!this.state.working})
      console.log(this.state.working);
      
    }
    GetButtonName =() =>{
      
      return(this.state.working?"Hommer is Working":"Hommer is not Working")
    }
    GetAnimationLog =() =>{
      return(this.state.working?"App-other-logo":"App-logo")
    }
  render() {
 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.GetAnimationLog()} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
    
        <button className="my-Btn m-10" onClick ={() =>this.HandelClick()}>{this.GetButtonName()}</button>
        <Quotes />
        
      </div>
    );
  }
}

export default App;
