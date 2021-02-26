
import connector from './connector'
import WeatherAPIActions from './WeatherAPI'
import IWeatherAppCore from './interfaces'

class WeatherAppCore implements IWeatherAppCore {
  connector = connector

  WeatherAPI = WeatherAPIActions
}

export default new WeatherAppCore()
