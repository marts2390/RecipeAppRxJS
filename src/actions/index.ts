import HomeScreenBloc from 'actions/blocs/HomeScreenBloc'
import RecipeScreenBloc from 'actions/blocs/RecipeScreenBloc'
import { IActions } from './interface'

class UseCases implements IActions {
  HomeScreenService = HomeScreenBloc

  RecipeScreenService = RecipeScreenBloc
}

export default new UseCases()
