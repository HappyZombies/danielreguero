import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App App-center-screen">
      <header className="App-header">
        <h1>Daniel Reguero</h1>
        <h4>
          <b>&gt; I just wanna make stuff</b>
        </h4>
        <i>Isaiah 40:31</i>
      </header>
      <div>
        <nav className="App-menu">
          <ul>
            <li className="App-link">
              <Link to="/projects">projects</Link>
            </li>
            {/* <li className="App-link">
                <Link to='/bugs'>bug hunts</Link>
              </li> */}
            <li className="App-link">
              <Link to="/blogs">blog</Link>
            </li>
            {/* <li className="App-link">
                <Link to='/ketorecipes'>keto recipes</Link>
              </li> */}
            <li className="App-link">
              <Link to="/about">about</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
