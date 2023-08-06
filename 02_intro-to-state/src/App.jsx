import { useState } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Welcome from './components/welcome/Welcome';

/* 
  State:
  State helps us modify data depending on a condition.
  - It is data that changes
  - To use State, it must be imported.

  Use a variable declaration, square brackets, a variable name, the variable name with "set", and set it equal to useState() with an initial value.
  --> const [ varName, setVarName ] = useState('initialValue')
*/

function App() {
  /* This is only one value, "static" 
  let name = 'Ferdinand'; */

  // useState lets us have flexible data
  const [ names, setNames ] = useState(['Frodo', 'Sam', 'Pippin', 'Merry']);

  // Build a function that maps over names to display a welcome to each
  const displayWelcome = () => {
    // this returns the logic from func
    return(names.map((name, index) => {
      // this return returns the component per name in names array, can also pass setNames function/functionality as props
      return(
        <Welcome 
          key={index}
          name={name}
          names={names} // passing full array to child
          setName={setNames} // passing function to child
        />
      )
    }))
  }


  // Good form is to keep rfc return "clean"
  return (
    <div className="App">
      <Nav />
      {/* Create props key value pair to pass to child Welcome, where name is the key and the value is getting data from the variable name initialized above. 
      <Welcome name={names}/>
      */}
      {displayWelcome()}
    </div>
  );
}

export default App;