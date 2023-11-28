import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
             <Route exact path="/pokemon/:id">
              <PokemonDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
