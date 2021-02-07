/*
 * (c) Copyright 2020 Preservica
 *  All rights reserved.
 *
 *  Developed By:
 *  Preservica
 *  32 The Quadrant
 *  Abingdon Science Park
 *  Abingdon
 *  OX14 3YS
 *
 *  email: info@preservica.com
 *  web: www.preservica.com
 */

import React, { FC } from 'react'
import {
  Route, Switch, Redirect, BrowserRouter
} from 'react-router-dom'

import HomeScreen from 'view/screens/Home'
import RecipeScreen from 'view/screens/RecipeView'

const GeneralRouterComponent: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={ HomeScreen }
      />
      <Route
        exact
        path="/recipes/:recipeId"
        component={ RecipeScreen }
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

export default GeneralRouterComponent
