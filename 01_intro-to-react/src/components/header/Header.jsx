/* 
    Boiler Place Code for Functional Components
        - Create a function with a return of JSX (single element).
        - Export the function using export default and the function name.
*/

function Header() {

    const name = 'Jake';

    return(
        <header>
            <h1>Welcome to React, {name}</h1>
        </header>
    )
}

export default Header;