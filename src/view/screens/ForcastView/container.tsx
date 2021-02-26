import React, { FC } from 'react'
import Actions from 'actions'
import { useStore, useDispatch } from 'data'

import ForcastViewComponent from './component'

const ForcastViewContainer:FC = () => {
  const { WeatherAppStore: { forcastData, forcastLoaded, filteredList } } = useStore()
  const dispatch = useDispatch()

  return (
    <ForcastViewComponent
      forcastData={ forcastData }
      isLoaded={ forcastLoaded }
      filteredList={ filteredList }
      getForcastData={ Actions.WeatherAppService.getForecast(dispatch) }
      resetFilters={ Actions.WeatherAppService.resetFilters(dispatch) }
      filterMinForecast={ Actions.WeatherAppService.filterMinForecastList(dispatch) }
      filterMaxForecast={ Actions.WeatherAppService.filterMaxForecastList(dispatch) }
    />
  )
}

export default ForcastViewContainer
