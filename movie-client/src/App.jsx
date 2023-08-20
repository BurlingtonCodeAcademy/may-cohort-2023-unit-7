import './App.css';
import Auth from './components/auth/Auth';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieIndex from './components/movie/MovieIndex';
import MovieEdit from './components/movie/MovieEdit';
import Logout from './components/auth/logout/Logout';

function App() {

  const [ sessionToken, setSessionToken ] = useState('');
  
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
      {
        sessionToken !== '' ? 
        <Logout setSessionToken={setSessionToken} /> : null
        }
      <Routes>
        <Route 
          path='/'
          element={<Auth updateToken={updateToken} />}
        />
        <Route 
          path='/movie'
          element={<MovieIndex token={sessionToken} />}
        />
        <Route
          path='/movie/update/:id'
          element={<MovieEdit token={sessionToken} />}
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