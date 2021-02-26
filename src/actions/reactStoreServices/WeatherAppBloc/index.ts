import { Dispatch } from 'react'

import { IWeatherAppService } from 'actions/layerInterface'
import delivery from 'delivery'

import {
  initialLoadActionCreator,
  getForecastActionCreator,
  minFilterActionCreator,
  maxFilterActionCreator,
  resetFiltersActionCreator,
} from 'data/reactStore/WeatherAppStore/actions'

class WeatherAppBloc implements IWeatherAppService {
  private cityKey = '2643743'

  initialLoad = (dispatch: Dispatch<any>) => async () => {
    const { value, error } = await delivery.WeatherAPI.getWeatherByCity(this.cityKey)
    await this.getForecast(dispatch)(6)

    if (error) {
      console.warn('No Weather')

      return
    }


    if (value) {
      dispatch(initialLoadActionCreator(value))
    }
  }

  getForecast = (dispatch: Dispatch<any>) => async (days: number) => {
    const { value, error } = await delivery.WeatherAPI.getWeatherForecast(this.cityKey, days)

    if (error) {
      console.warn(error)

      return
    }

    if (value) {
      dispatch(getForecastActionCreator(value))
    }
  }

  filterMinForecastList = (dispatch: Dispatch<any>) => (amount: number) => {
    dispatch(minFilterActionCreator({ amount }))
  }

  filterMaxForecastList = (dispatch: Dispatch<any>) => (amount: number) => {
    dispatch(maxFilterActionCreator({ amount }))
  }

  resetFilters = (dispatch: Dispatch<any>) => () => {
    dispatch(resetFiltersActionCreator())
  }
}

export default new WeatherAppBloc()
