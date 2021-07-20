import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './components/Home/Home'
import FoodList from './components/FoodList/index'
import About from './components/About/About'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/foods' component={FoodList} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/' />
    </Switch>