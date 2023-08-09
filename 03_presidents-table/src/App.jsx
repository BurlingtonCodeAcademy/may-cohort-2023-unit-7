import './App.css';
import Presidents from './components/presidents/Presidents';

/* 
! Quick Challenge
  - Create boiler plates for all three components - DONE
    - Return a React.Fragment for all three components. - DONE
    - Set each component with an <h2> that states: "Hello from [COMPONENT]" - DONE
  - Import & Mount each component as to how they should be in parent/child relationship
*/

function App() {
  return (
    <div className="App">
      <h1>List of Presidents</h1>
      <Presidents />
    </div>
  );
}

export default App;
