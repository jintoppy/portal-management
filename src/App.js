import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Details from './components/Details';


function App() {
  return (
    <BrowserRouter>
      <div>
        Header
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/details/:postId" component={Details} />
      </div>
    </BrowserRouter>
  );
}

export default App;
