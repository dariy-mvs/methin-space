import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
// import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/about_us" component={AboutUs} /> */}
        </Switch>
      </Router>

    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=-yZfdyPMzCE
