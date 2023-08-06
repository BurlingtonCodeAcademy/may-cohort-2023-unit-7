import React from 'react'

function Welcome(props) {

    // console.log(props);

    function removeName() {
        // console.log(`Clicked ${props.name}!`)
        // Create a variable, filter through our names array, remove the name we clicked (use filter to return everyone BUT who was clicked/deleted)
        const updatedNames = props.names.filter(name => name !== props.name);

        // Pass the new filtered array to our setName function
        props.setName(updatedNames)
        // console.log(props.names);
    }

  return (
    <div onClick={removeName} className='welcome'>Welcome, {props.name}</div>
  )
}

export default Welcome;