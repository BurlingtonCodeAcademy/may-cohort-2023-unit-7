import React from 'react';
import EmployeeInfo from './EmployeeInfo';

export default function Employees() {
    /* 
        Using the component Employees as the parent for EmployeeInfo, this streamlines the app and file tree.
    */

    /* 
    ! Challenge:
        - Update the return to include the CITY/STATE values of what is being passed through the props.
        - Update the objects being passed to include a POSITION & FOOD.
            - Include those values within the returned component.
    */

    let employeeRecords = [
        {
            name: "Jester Bash",
            city: "Miami",
            state: "FL",
            position: "Web Dev",
            food: "Pizza"
        },
        {
            name: "Tom Jones",
            city: "Louisville",
            state: "KY",
            position: "Sales Rep",
            food: "Steak" 
        },
        {
            name: "Janet James",
            city: "New York City",
            state: "NY",
            position: "UX/UI Designer",
            food: "Sushi" 
        },
    ];

  return (
    <>
        <h1>Hello from Employees Component!</h1>
        {/* Map over the array to create an EmployeeInfo component per object/employee 
        - React needs a way to know of/navigate child components
        - Provide an index per child component using map method
        */}

        {employeeRecords.map((record, index) => (
            <EmployeeInfo
                key={index}
                name={record.name}
                city={record.city}
                state={record.state}
                position={record.position}
                food={record.food}
            />
        ))}
    </>
  )
}
