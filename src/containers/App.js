import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Radium from 'radium';

class App extends Component {
  state = {
    persondetails: [
      {
        id: "12",
        name: "Max",
        age: 25
      }, {
        id: "22",
        name: "Min",
        age: 28
      }, {
        id: "32",
        name: "MinMax",
        age: 29
      }
    ],
    showname: false,
    toggleCounter :0
  };

  ToggeleViewHandler = () => {
    this.setState((prevState, props) => {
      return ({
        showname: !this.state.showname,
        toggleCounter : prevState.toggleCounter + 1
      })
    });  
  };

  ChangeNameHandler = (event, id) => {
    const changedPersonIndex = this.state.persondetails.findIndex((p) => {
      return p.id === id
    })
    const changedperson = {
      ...this.state.persondetails[changedPersonIndex]
    }
    const persons = [...this.state.persondetails]
    changedperson.name = event.target.value
    persons[changedPersonIndex] = changedperson
    this.setState({persondetails: persons});
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persondetails]
    persons.splice(index, 1)
    this.setState({persondetails: persons});
  };

  render() {

    let personlist = null;
    if (this.state.showname) {
      personlist = (
        <Persons
          persondetails = {this.state.persondetails}
          click = {this.deletePersonHandler}
          change = {this.ChangeNameHandler}
        />
      );
    }

    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to Demo!!!!</h1>
      </header>
      <Cockpit click={this.ToggeleViewHandler} showname={this.state.showname}/>
      {personlist}
    </div>);
    // return React.createElement('div', {className: 'App'}, 'Helllo Buddy')

  }
}

export default Radium(App);
