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
