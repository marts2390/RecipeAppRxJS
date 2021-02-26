import React, { FC } from 'react'
import {
  Route, Switch, Redirect, BrowserRouter
} from 'react-router-dom'

import HomeScreen from 'view/screens/Home'
import ForcastView from 'view/screens/ForcastView'

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
        path="/forecast"
        component={ ForcastView }
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

export default GeneralRouterComponent
