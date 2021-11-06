import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import SearchContextProvider from "./context/searchContext";

import NavBar from './components/NavBar';
import Login from "./components/Login";
import HomeContainer from "./components/containers/HomeContainer";


function App() {
  return (
    <SearchContextProvider>
    <Router>
      <div className="App">
        <header>
          <NavBar  />
        </header>

        <Switch>
          <main>

            <Route exact path='/' component={HomeContainer} />

            <Route exact path='/login' component={Login} />

          </main>
        </Switch>

      </div>
    </Router>
    </SearchContextProvider>
  );
}

export default App;
