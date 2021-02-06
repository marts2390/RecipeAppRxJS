import HomeScreenBloc from 'actions/blocs/HomeScreenBloc'
import { IActions } from './interface'

class UseCases implements IActions {
  HomeScreenService = HomeScreenBloc
}

export default new UseCases()
