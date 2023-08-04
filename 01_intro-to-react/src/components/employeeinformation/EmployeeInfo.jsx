import React from 'react'
/* 
    React Fragment
    - can be used to house a single JSX component
    - reduces the "nodes" in the DOM 
    - * If it is a <div> without styling: just use a fragment!
    Ex:
    <React.Fragment>
    <Fragment>
    <> </>
*/

export default function EmployeeInfo(props) {
    //  Gives us an object in the browser console of the key/value pair we passed the child from the parent; App.jsx --> EmployeeInfo
    console.log(props);

  return (
    <>
        <h1>{props.name}</h1>
        <ul style={{listStyleType: "none", textAlign: "left"}}>
            <li>From: {props.city}, {props.state}</li>
            <li>Position: {props.position}</li>
            <li>Favorite Food: {props.food}</li>
        </ul>
    </>
  )
}
