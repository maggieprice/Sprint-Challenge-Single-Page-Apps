import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Route,
  Link, Switch
   } from "react-router-dom";


export default function App() {
  return (
    <main>
    <Router>
      <Header />
      <div>
      <nav className="main-nav">
          <ul>
            <li>
          <Link to="/">Welcome</Link>
          </li>
          <li>
          <Link to="/characters1">Characters</Link>
          </li>
          </ul>
          </nav>
          <Switch>
          <Route path="/characters1" component={CharacterList} />
          <Route path="/" component={WelcomePage} />
        </Switch>
      </div>
    
    </Router>
    </main>
  );
}
