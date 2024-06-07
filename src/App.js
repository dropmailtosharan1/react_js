import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="navbar">
      {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        <a href="#home">Home</a> 
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      
      <div className="dropdown">
    <button className="dropbtn">Dropdown</button>
    <div className="dropdown-content">
      <a href="#option1">Option 1</a>
      <a href="#option2">Option 2</a>
      <div className="submenu">
        <button className="subbtn">Submenu</button>
        <div className="submenu-content">
          <a href="#suboption1">Suboption 1</a>
          <a href="#suboption2">Suboption 2</a>
        </div>
      </div>
    </div>
  </div>
      {/* </header> */}
    </div>
  );
}

export default App;
