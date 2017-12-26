import React,{Component} from 'react'
import "./Person.css"
import Radium from 'radium';
import PropTypes from 'prop-types';

class Person extends Component {

  componentDidMount() {
    if(this.props.index == 0) {
      this.elementref.focus();
    }
  }

  render() {
    return(
      <div>
        <p className="Person" onClick={this.props.click}> I am {this.props.name} and {this.props.age} years old {this.props.children}</p>
        <input
          ref = {(inputprop) => {
            this.elementref = inputprop
          }}
          className="Person"
          type='text'
          onChange={this.props.change}
          value={this.props.name}
        />
      </div>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  change: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
}

export default Radium(Person);
