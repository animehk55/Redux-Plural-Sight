import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
 }from 'react-router-dom';
 import App from './components/App';
 
 
import AboutPage from './components/about/aboutPage'; 
import HomePage from './components/home/homePage'; 

export default (
      <Router>
        <div>
          <Route exact path="/" component={App} />
        <Route exact path="/HOME_" component={HomePage}/>
        <Route exact path="/about" component={AboutPage}/>
        </div>
      </Router>
  );
