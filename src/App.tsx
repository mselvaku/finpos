import * as React from 'react';
import './App.css';
import Dashboard from "./dashboard/Dashboard";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from "./store/configureStore";
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App: React.FC = () => {
  return (
      <Provider store={store}>
          <Router>
              <div className="App">
                  <div id="route-container">
                      <Route path="/" exact component={Dashboard} />
                  </div>
              </div>
          </Router>
      </Provider>
  )
};

export default App;
