import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import LandingPage from './LandingPage';
import Certificates from './Pages/Certificates';
import GraphicsDesign from './Pages/GraphicsDesign'
import WebDev from './Pages/WebDev';
import AppDev from './Pages/AppDev';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/Certificates" exact>
            <Certificates />
          </Route>
          <Route path="/GraphicsDesign" exact>
            <GraphicsDesign />
          </Route>
          <Route path="/WebDev">
            <WebDev />
          </Route>
          <Route path="/AppDev">
            <AppDev />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
