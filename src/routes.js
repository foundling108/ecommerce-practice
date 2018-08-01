import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

export default (
    <Switch>
        <Route component={ Home } path="/" exact/>
        <Route component={ Products } path="/products"/>
        <Route component={ Cart } path="/cart"/>
    </Switch>
)