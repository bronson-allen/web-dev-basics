import logo from "./logo.svg";
import "./App.css";
import { CustomButton } from "./components/CustomButton";

function App() {
  console.log("testing");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Something Else can you see this?
        </a>
        <CustomButton name={"bronson"} />
      </header>
    </div>
  );
}

export default App;
