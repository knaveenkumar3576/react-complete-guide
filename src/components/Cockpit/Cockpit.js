import React from 'react'
import Radium from 'radium';

const Cockpit=(props) => {
  const buttonstyle = {
    backgroundColor : 'red',
    border: '1px solid blue',
    color : 'white',
    ':hover': {
        backgroundColor : 'salmon',
    }
  };

  if (props.showname) {
    buttonstyle.backgroundColor = 'green'
    buttonstyle[':hover'] = {
      backgroundColor : 'lightgreen'
    }
}

  let cockpitdiv = (
    <button
      style={buttonstyle}
      onClick={props.click}
    >
      Toggle View
    </button>
  )
  return cockpitdiv;
}

export default Radium(Cockpit);
