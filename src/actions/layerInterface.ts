import { Dispatch } from 'react'

export interface IActions {
  WeatherAppService: IWeatherAppService
}

export interface IWeatherAppService {
  initialLoad: (dispatch: Dispatch<any>) => void;
  resetFilters: (dispatch: Dispatch<any>) => void;
  getForecast: (dispatch: Dispatch<any>) => (days: number) => void;
  filterMinForecastList: (dispatch: Dispatch<any>) => (amount: number) => void;
  filterMaxForecastList: (dispatch: Dispatch<any>) => (amount: number) => void;
}
