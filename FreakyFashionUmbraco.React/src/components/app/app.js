import React, { Component } from 'react';
import './app.css';
import HomeView from '../../views/homeView/homeView';
import ProductView from '../../views/productView/productView';
import CategoryView from '../../views/categoryView/categoryView';
import Navbar from '../navbar/navbar';
import Error404 from '../../views/errorViews/error404';
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
            <Route path="/" component={ HomeView } exact />
            <Route path="/products/:slug" component={ ProductView } />
            <Route path="/categories/:slug" component={ CategoryView } />             
            <Route component={ Error404 } />
          </Switch>
        </main>
      </div>    
    );
  } 
}

export default App;
