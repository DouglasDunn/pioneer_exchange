import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Textbooks from './components/Textbooks';
import Electronics from './components/Electronics';
import Houses from './components/Houses';
import Tickets from './components/Tickets';
import postTextbook from './components/postTextbook';
import postElectronic from './components/postElectronic';
import postEventTicket from './components/postEventTicket';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/textbooks" component={Textbooks} />
            <Route exact path="/electronics" component={Electronics} />
            <Route exact path="/houses" component={Houses} />
            <Route exact path="/tickets" component={Tickets} />
            <Route exact path="/postTextbook" component={postTextbook} />
            <Route exact path="/postElectronic" component={postElectronic} />
            <Route exact path="/postEventTicket" component={postEventTicket} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
