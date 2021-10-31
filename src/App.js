import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import NavBar from './components/NavBar';
import Login from "./components/Login";
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar  />
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/login' component={Login} />

        
        </Switch>


      </div>


    </Router>
  );
}

export default App;
