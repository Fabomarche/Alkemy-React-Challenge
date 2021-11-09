import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import SearchContextProvider from "./context/searchContext";
import TeamContextProvider from "./context/teamContext";

import NavBar from './components/NavBar';
import Login from "./components/Login";
import HomeContainer from "./components/containers/HomeContainer";
import DetailContainer from './components/containers/DetailContainer'


function App() {
  return (
    <SearchContextProvider>
    <TeamContextProvider>
    <Router>
      <div className="App">
        <header>
          <NavBar  />
        </header>

        <Switch>
          <main>

            <Route exact path='/' component={HomeContainer} />

            <Route exact path='/login' component={Login} />

            <Route exact path='/heroDetail/:hid'component={DetailContainer}/>C

          </main>
        </Switch>

      </div>
    </Router>
    </TeamContextProvider>
    </SearchContextProvider>
  );
}

export default App;
