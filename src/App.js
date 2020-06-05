import React from "react";
import "./App.css";
import Button from "./components/Button";
import Welcome from "./pages/welcome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/welcome">Welcome</Link>
              </li>
              <li>
                <Link to="/error">Error</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Error() {
  return <h2>Error</h2>;
}

export default App;
