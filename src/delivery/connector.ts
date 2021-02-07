
import Axios, { AxiosInstance } from 'axios'

class ApiConnector {
  connector: AxiosInstance

  constructor() {
    this.connector = Axios.create({
      baseURL: '/',
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }
}

export default new ApiConnector()
