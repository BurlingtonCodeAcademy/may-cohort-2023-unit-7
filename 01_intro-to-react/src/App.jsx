import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutme/AboutMe';
import Employees from './components/employeeinformation/Employees';

/* 
  Props: Properties 
  - A set of data that is passed "downward" from parent to child.
  - Cannot be passed to sibling components.
  - Sent through the mounted component from the parent and obtained within the parameters of the child component.
    - props is the naming convention that tells React the process
    - Parameter can be named anything, BUT should be denoted with the props naming (industry standard)
*/

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;
