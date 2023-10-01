import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Playbar from "./components/Playbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Content></Content>
      <Sidebar></Sidebar>
      <Playbar></Playbar>
    </div>
  );
}

export default App;
