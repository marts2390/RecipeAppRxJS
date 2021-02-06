import React, { FC } from 'react'
import UC from 'actions'
import AppComponent from './component'

const AppContainer:FC = () => (
  <AppComponent testFunction={ UC.HomeScreenService.startLoader } />
)

export const container = AppContainer
