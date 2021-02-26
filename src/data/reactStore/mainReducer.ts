import React from 'react'

import {
  IStoreFragment as IWeatherAppFragment,
  initialState as weatherAppStoreInitialState,
  reducer as weatherAppStoreReducer,
} from './WeatherAppStore/reducers'
import { TActions as TWeatherAppStoreActions } from './WeatherAppStore/actions'

export interface IStore {
  WeatherAppStore: IWeatherAppFragment;
}

export type TActions = TWeatherAppStoreActions

export const initialState: IStore = {
  WeatherAppStore: weatherAppStoreInitialState,
}

export const mainReducer: React.Reducer<IStore, TActions> = ({
  WeatherAppStore,
},

action) => ({
  WeatherAppStore: weatherAppStoreReducer(WeatherAppStore, action),
})
