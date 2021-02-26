import { IWeatherForcastModel } from 'models/weatherForcastModel'

export interface IWeatherForcastResponse {
  data: IWeatherForcastModel[],
}
