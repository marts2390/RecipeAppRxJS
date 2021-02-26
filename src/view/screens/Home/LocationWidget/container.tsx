import React from 'react'
import { useStore } from 'data'

import LocationWidgetComponent from './component'

const LocationWidgetContainer = () => {
  const { WeatherAppStore: { weatherData } } = useStore()

  return (
    <LocationWidgetComponent
      weatherData={ weatherData }
    />
  )
}

export default LocationWidgetContainer
