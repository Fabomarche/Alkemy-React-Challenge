import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import SearchContextProvider from "./context/searchContext";
import TeamContextProvider from "./context/teamContext";


import NavBar from './components/NavBar';
import Login from "./components/Login";
import HomeContainer from "./components/containers/HomeContainer";
import DetailContainer from './components/containers/DetailContainer'


function App() {
  const [login, setLogin] = useState(false)
  console.log(login)
  return (
  
    <TeamContextProvider>
    <SearchContextProvider>
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Switch>
          <main>
            {login && <Redirect to='/home'/>}
            {login ? <div>
                        <Route exact path='/home'>
                          <HomeContainer login={login}/>
                        </Route>
                        <Route exact path='/heroDetail/:hid'component={DetailContainer}/>
                      </div>
                    :
                    <Route exact path='/'>
                      <Login login={login} setLogin={setLogin}/>
                    </Route>
                    
                    
          }

          </main>
        </Switch>

      </div>
    </Router>
    </SearchContextProvider>
    </TeamContextProvider>

  );
}

export default App;
