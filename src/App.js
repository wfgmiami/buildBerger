import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
// import Radium, {StyleRoot} from 'radium';

class App extends Component {

  state = {
    persons: [
      { id: 'adfaf1', name: 'Max', age: 28 },
      { id: 'qere13', name: 'Manu', age: 29 },
      { id: 'vccae4', name: 'Stephanie', age: 26 }
    ],
  }


  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ],
      otherState: 'some other value',
      showPersons: false
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const updatedPerson = {...this.state.persons[personIndex]}
    updatedPerson.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = updatedPerson

      this.setState({
        persons: persons
      })

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons

    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonHandler = (personIndex) => {

    // const deletePerson = this.state.persons[id].name;
    // const newArr = this.state.persons.filter(person => person.name !== deletePerson)
    // this.setState({ persons: newArr})

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }



  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      )
      // style.backgroundColor = 'red'
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }


    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>hi i'm an react app</h1>
          <p className={classes.join(' ')}>this is really working</p>
          <button
            // style={style}
            onClick={ () => this.togglePersonHandler() }>
            Switch Name</button>
            { person }
        </div>
      // </StyleRoot>
    );

  }

    // return React.createElement('div', {className: 'App'}, React.createElement('hi', null,'i\'am a react APP!!!'));

}

export default App;


