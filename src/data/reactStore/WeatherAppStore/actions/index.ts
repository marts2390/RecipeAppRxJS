import {
  emptyActionCreator, IEmptyAction, actionCreator, IAction
} from 'data/reactStore/actionTypes'

import { IWeatherByCityModel } from 'models/weatherByCityModel'
import { IWeatherForcastModel } from 'models/weatherForcastModel'

export enum ActionTypes {
  showAppLoader = 'AppScreenStore/showAppLoader',
  hideAppLoader = 'AppScreenStore/hideAppLoader',
  initialLoad = 'AppScreenStore/initialLoad',
  getForcast = 'AppScreenStore/getForcast',
  minFilter = 'AppScreenStore/minFilter',
  maxFilter = 'AppScreenStore/maxFilter',
  resetFilters = 'AppScreenStore/resetFilters'
}

export type TShowAppLoaderAction = IEmptyAction<ActionTypes.showAppLoader>
export type TShowAppLoaderActionCreator = () => TShowAppLoaderAction
export const showAppLoaderActionCreator:
TShowAppLoaderActionCreator = () => emptyActionCreator(ActionTypes.showAppLoader)

export type THideAppLoaderAction = IEmptyAction<ActionTypes.hideAppLoader>
export type THideAppLoaderActionCreator = () => THideAppLoaderAction
export const hideAppLoaderActionCreator:
THideAppLoaderActionCreator = () => emptyActionCreator(ActionTypes.hideAppLoader)

export type TResetFiltersAction = IEmptyAction<ActionTypes.resetFilters>
export type TResetFiltersActionCreator = () => TResetFiltersAction
export const resetFiltersActionCreator:
TResetFiltersActionCreator = () => emptyActionCreator(ActionTypes.resetFilters)

export interface TMinFilterActionPayload {
  amount: number;
}
export type TMinFilterAction = IAction<ActionTypes.minFilter, TMinFilterActionPayload>
export type TMinFilterActionCreator = (payload: TMinFilterActionPayload) => TMinFilterAction
export const minFilterActionCreator:
TMinFilterActionCreator = (payload: TMinFilterActionPayload) => actionCreator(ActionTypes.minFilter, payload)

export interface TMaxFilterActionPayload {
  amount: number;
}
export type TMaxFilterAction = IAction<ActionTypes.maxFilter, TMinFilterActionPayload>
export type TMaxFilterActionCreator = (payload: TMaxFilterActionPayload) => TMaxFilterAction
export const maxFilterActionCreator:
TMaxFilterActionCreator = (payload: TMaxFilterActionPayload) => actionCreator(ActionTypes.maxFilter, payload)

export interface IinitialLoadPayload {
  data: IWeatherByCityModel;
}
export type TInitialLoadAction = IAction<ActionTypes.initialLoad, IinitialLoadPayload>
export type TInitialLoadActionCreator = (payload: IinitialLoadPayload) => TInitialLoadAction
export const initialLoadActionCreator:
TInitialLoadActionCreator = (payload: IinitialLoadPayload) => actionCreator(ActionTypes.initialLoad, payload)

export interface IGetForecastPayload {
  data: IWeatherForcastModel[];
}
export type TGetForecastAction = IAction<ActionTypes.getForcast, IGetForecastPayload>
export type TGetForecastActionCreator = (payload: IGetForecastPayload) => TGetForecastAction
export const getForecastActionCreator:
TGetForecastActionCreator = (payload: IGetForecastPayload) => actionCreator(ActionTypes.getForcast, payload)


export type TActions =
  TShowAppLoaderAction | THideAppLoaderAction | TInitialLoadAction
  | TGetForecastAction | TMinFilterAction | TMaxFilterAction | TResetFiltersAction
