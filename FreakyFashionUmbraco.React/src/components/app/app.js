import React, { Component } from 'react';
import './app.css';
import Home from '../home/home';
import Product from '../product/product';
import Category from '../category/category';
import Navbar from '../navbar/navbar';
import Error404 from '../error404/error404';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    category: {}
  }

  render(){
    return (
      <div>
          <Navbar onNavigation={ this.getCategory } />
        <main>
          <Switch>
            <Route path="/" component={ Home } exact />
            <Route path="/products/:slug" component={ Product } />
            <Route path="/categories/:slug" component={ Category } />             
            <Route component={ Error404 } />
          </Switch>
        </main>
      </div>    
    );
  } 
}

export default App;
