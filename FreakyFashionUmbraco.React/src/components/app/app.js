import React from 'react';
import './app.css';
import Home from '../home/home';
import Product from '../product/product';
import Category from '../category/category';
import Navbar from '../navbar/navbar';
import Error404 from '../error404/error404';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <Navbar />
      <main>
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/product" component={ Product } />
          <Route path="/categories" component={ Category } />
          <Route component={ Error404 } />
        </Switch>
      </main>
    </div>    
  );
}

export default App;
