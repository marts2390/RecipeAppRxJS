import React, { FC } from 'react'
import Actions from 'actions'
import { useStore, useDispatch } from 'data'

import HomeComponent from './component'

const HomeContainer:FC = () => {
  const { WeatherAppStore: { weatherData, isLoaded } } = useStore()
  const dispatch = useDispatch()

  return (
    <HomeComponent
      weatherData={ weatherData }
      isLoaded={ isLoaded }
      initialLoad={ Actions.WeatherAppService.initialLoad(dispatch) }
    />
  )
}

export default HomeContainer
