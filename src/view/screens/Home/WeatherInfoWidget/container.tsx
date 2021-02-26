import React from 'react'
import { useStore } from 'data'

import WeatherInfoWidgetComponent from './component'

const WeatherInfoWidgetContainer = () => {
  const { WeatherAppStore: { weatherData } } = useStore()

  return (
    <WeatherInfoWidgetComponent
      weatherData={ weatherData }
    />
  )
}

export default WeatherInfoWidgetContainer
