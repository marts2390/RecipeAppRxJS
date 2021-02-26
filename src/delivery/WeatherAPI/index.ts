import { IFunctionResultModel } from 'models/functionResultModel'
import { IWeatherByCityResponse } from 'models/weatherByCityResponseModel'
import { IWeatherForcastResponse } from 'models/weatherForcastResponseModel'
import ApiConnector from '../connector'
import { IWeatherAPIActions } from '../interfaces'

class WeatherAPIActions implements IWeatherAPIActions {
  private apiKey = '83aca574d7d44021b0529d0e5cfa79fc'

  getWeatherByCity = async (cityId: string) => {
    const result: IFunctionResultModel<IWeatherByCityResponse | null> = {
      value: null,
      error: null,
    }

    try {
      const response = await ApiConnector.connector.get(
        `/current?city_id=${cityId}&key=${this.apiKey}`
      )

      if (response.status === 200) {
        result.value = response.data
      } else {
        result.error = new Error(`API error, status: ${response.status}`)
      }
    } catch (error) {
      result.error = new Error('Network error')
    }
    return result
  }

  getWeatherForecast = async (cityId: string, days: number) => {
    const result: IFunctionResultModel<IWeatherForcastResponse | null> = {
      value: null,
      error: null,
    }

    try {
      const response = await ApiConnector.connector.get(
        `/forecast/daily?city_id=${cityId}&days=${days}&key=${this.apiKey}`
      )

      if (response.status === 200) {
        result.value = response.data
      } else {
        result.error = new Error(`API error, status: ${response.status}`)
      }
    } catch (error) {
      result.error = new Error('Network error')
    }

    return result
  }
}

export default new WeatherAPIActions()
