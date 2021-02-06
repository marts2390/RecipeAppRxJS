
import Axios, { AxiosInstance } from 'axios'

class ApiConnector {
  connector: AxiosInstance

  constructor() {
    this.connector = Axios.create({
      baseURL: 'https://www.themealdb.com/api/json/v1/1/',
      withCredentials: true,
      headers: {
        Pragma: 'no-cache',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }
}

export default new ApiConnector()
