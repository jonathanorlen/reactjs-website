import React from 'react';
import logo from './logo.svg';
import PageWrapper from './components/PageWrapper';
import './App.css';

//pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route
          exact={true} path="/" component={Home}
        />
        <Route
          path="/about" component={About}
        />
        <Route
          path="/contact" component={Contact}
        />
      </PageWrapper>
    </Router>
  );
}

export default App;
