export interface IWeatherAPIActions {
  getWeatherByCity: (cityId: string) => void;
  getWeatherForecast: (cityId: string, days: number) => void;
}

export default interface IWeatherAppCore {
  WeatherAPI: IWeatherAPIActions;
}
