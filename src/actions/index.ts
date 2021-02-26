import { IActions } from 'actions/layerInterface'
import WeatherAppService from 'actions/reactStoreServices/WeatherAppBloc'

class Actions implements IActions {
  WeatherAppService = WeatherAppService
}

export default new Actions()
