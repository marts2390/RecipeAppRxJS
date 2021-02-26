import { IWeatherByCityModel } from 'models/weatherByCityModel'
import { IWeatherForcastModel } from 'models/weatherForcastModel'
import { ActionTypes, TActions } from '../actions/index'

export interface IStoreFragment {
  isLoaded: boolean | null
  forcastLoaded: boolean | null
  weatherData: IWeatherByCityModel | null
  forcastData: IWeatherForcastModel[]
  filteredList: IWeatherForcastModel[]
}

export const initialState: IStoreFragment = {
  isLoaded: null,
  forcastLoaded: null,
  weatherData: null,
  forcastData: [],
  filteredList: [],
}

export const reducer = (state: IStoreFragment, action: TActions) => {
  switch (action.type) {
    case ActionTypes.showAppLoader:
      return {
        ...state,
        isLoaded: false,
      }

    case ActionTypes.hideAppLoader:
      return {
        ...state,
        isLoaded: true,
      }

    case ActionTypes.initialLoad:
      return {
        ...state,
        weatherData: action.payload.data,
        isLoaded: true,
      }


    case ActionTypes.getForcast:
      return {
        ...state,
        forcastData: action.payload.data,
        filteredList: action.payload.data,
        forcastLoaded: true,
      }

    case ActionTypes.minFilter:
      return {
        ...state,
        filteredList: state.forcastData?.filter((item) => item.temp <= action.payload.amount),
      }

    case ActionTypes.maxFilter:
      return {
        ...state,
        filteredList: state.forcastData?.filter((item) => item.temp >= action.payload.amount),
      }

    case ActionTypes.resetFilters:
      return {
        ...state,
        filteredList: state.forcastData
      }

    default:
      return state
  }
}
