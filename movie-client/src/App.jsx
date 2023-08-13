import './App.css';
import Auth from './components/auth/Auth';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [ sessionToken, setSessionToken ] = useState('Sample Token');
  
  console.log('Token: ', sessionToken)

  const updateToken = newToken => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  },[])

  return (
    <div className="App">
      <Routes>
        <Route 
          path='/'
          element={<Auth updateToken={updateToken} />}
        />
        <Route 
          path='/movie'
          element={<h2>Movies Section Placeholder</h2>}
        />
      </Routes>

      
    </div>
  );
}

export default App;

/* 
! React-Router-DOM
  - install dependency
    - npm i react-router-dom
  - update code to allow functionality
    - index.js
    - App.jsx
*/