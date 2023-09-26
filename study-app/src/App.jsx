import logo from "./img/sharingan.png";
import "./App.css";
import Komponen from "./Materi/Komponen";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Komponen />
    </div>
  );
}

export default App;
