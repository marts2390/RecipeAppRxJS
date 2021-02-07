import React, { FC } from 'react'
import UC from 'actions'
import { useObservable } from 'rxjs-hooks'
import AppComponent from './component'

const AppContainer:FC = () => {
  const { isLoaded } = useObservable(UC.HomeScreenService.getSubject) || UC.HomeScreenService.getCurrentState()

  return (
    <AppComponent
      initialLoad={ UC.HomeScreenService.initialLoad }
      isLoaded={ isLoaded }
    />
  )
}
export const container = AppContainer
