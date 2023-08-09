import React, {useState} from 'react'

function AddUser(props) {

    // console.log(props)

    const [ text, setText ] = useState(() => '');

    const handleChange = e => {
        // console.log(e);
        setText(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(props.names, props.setNames)

        let addUser = [...props.names];
        addUser.push(text); // using our state variable to add to a new array (addUser)

        props.setNames(addUser); // replacing old array w/ new array
        setText(''); // resetting our text state.
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={e => handleChange(e.target.value)}
                value={text} 
                type="text" 
            />
            <br />
            <input type="submit" value="Add" />
        </form>
    )
}

export default AddUser