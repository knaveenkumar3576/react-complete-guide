import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render() {
    let personlist = null;
     personlist= (<div>
      {
        this.props.persondetails.map((person, index) => {
          return(
            <Person
                name={person.name}
                age={person.age}
                key={person.id}
                index={index}
                click={() => this.props.click(index)}
                change={(event) => this.props.change(event, person.id)}
              />
          );
        })
      }
      </div>
    );
    return(personlist)
  }
}

export default Persons;
