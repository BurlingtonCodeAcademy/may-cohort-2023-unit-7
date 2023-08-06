# React
- Created by Facebook
- Is a client-side JavaScript Library
- Quickly renders on the page
- Companies transisitioning more to React
  - Netflix, Uber, Dropbox, AirBnB
- Works through **Components**

## Rules of JSX
1. **Must** Export for it to be used.
2. **Must** be imported to be used.
3. **Must** be mounted to be used.
4. **Must** only return **ONE** JSX Element.

# Creating a React App
- `npx create-react-app starting-react`
- **npx create-react-app [your-project-name]**

## Points of Interest
- public
  - `index.html`: What is displayed to the browser / what the browser reads.
- src
  - `index.js`: JavaScript being rendered to `index.html`.
  - `App.js`: Main point where components are mounted. This is being rendered within `index.js`.

## About Me Challenge
```js
/* 
  - Create a new folder called aboutme within the components folder.
  - Create a new file inside the folder called AboutMe.jsx.
  - Create a <p> tag that notes where you grew up. 
    - Use variables for city and state.
  - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
  - Export the component.
  - Import the component into App.jsx and mount it between the Header and Footer components.
*/
```

## Presidents Component Challenge
```js
/*
! Challenge:
    - Create a new folder within the components folder called "Presidents"
      - Create a file called PresidentVotes.jsx
      - Create a file called DisplayTotals.jsx
    - Create a functional component within each that matches their file name.
      - Note: Don't forget to export!
    - PresidentVotes.jsx 
      - will import DisplayTotals.jsx
      - Will have an array to be passed as props (array supplied below)
      - will return a React.Fragment
        - Will have a h1 that will hold "Presidents"
        - Will map through the provided array and mount DisplayTotals with the values within each object.
          - Hint: Don't forget about a key.
    - DisplayTotals.jsx
      - Will return a React.Fragment that holds a paragraph tag that states "NAME had a total vote count of COUNT"
    - Import and mount within App.jsx under the Employee component.

Array to pass through props:
    const votes = [
      { name: "Abe Lincoln", count: 139033},
      { name: "Stephen Douglas", count: 115509},
    ]
*/
```

### React Extension
**React Snippets**
dsznajder.es7-react-js-snippets
[docs](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)
- Quick Commands
  - rfce
    - React Functional Component Export
  - rfc
    - React Funcitonal Component (default export)
# State
- Helps modify data based on a condition
  - ex: 
    - offline/online status
    - session token storage
- Utilizes types of hooks
- Requires to be imported

`import { useState } from 'react'`

## `useState()`
- Structure:
  - `keyword [ variable, function ] = hook(initial value);`
  - The Process:

```js
function useState(startingData) {
  function updateState(newData) {
    startingData = newData;
  }
  return [startingData, updateState]
}
```