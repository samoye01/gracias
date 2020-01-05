import React from 'react';
import { Route } from 'react-router';
import { Home } from './components/home';
import {BrowserRouter as Router } from 'react-router-dom'
import { Layout } from './components/Layout';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';

function App() {
  return (
   
        <Layout>
       <Router>
       <Route exact path='/' component={Home} />
       </Router>
       </Layout>
   
   
   
  );
}

export default App;
