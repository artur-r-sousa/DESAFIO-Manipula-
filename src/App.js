import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Favorites from './views/Favorites';
import Home from './views/Home';


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
          <Route path="/favoritos" component={Favorites}>
            <Favorites />
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
