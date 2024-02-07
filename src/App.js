import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <strong>Hello World! </strong>
          <span role="img" aria-label="smiley face"> 😊</span>          
        </p>
        <Button />
      </header>
    </div>
  );
}

export default App;
