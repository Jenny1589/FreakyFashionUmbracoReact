import React, { Component } from 'react';
import './app.css';
import { services } from '../../../package.json';
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

  getCategory = (route) => {
    fetch(services.ApiUrl + services.contentRoute + 'getcategory?route=' + route, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
        this.setState({ category: json });
    });    
  }

  render(){
    return (
      <div>
          <Navbar onNavigation={ this.getCategory } />
        <main>
          <Switch>
            <Route path="/" component={ Home } exact />
            <Route path="/product/:slug" component={ Product } />
            <Route path="/categories/:slug">
              <Category category={ this.state.category } />
            </Route>
            <Route component={ Error404 } />
          </Switch>
        </main>
      </div>    
    );
  } 
}

export default App;
