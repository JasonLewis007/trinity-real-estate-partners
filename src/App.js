import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';      // Adjusted import path
import AboutUs from './pages/AboutUS'; // Adjusted import path
import ContactUs from './pages/ContactUs'; // Adjusted import path
import Header from './components/Header'; // Adjusted import path

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;


