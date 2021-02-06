
import { IHomeScreenService } from 'actions/interface'
import delivery from 'delivery'
import { ProtoBloc } from '../ProtoBloc'
import { IHomeScreenState } from './stateModel'


const defaultAuthState: IHomeScreenState = {
  isLoading: true,
}

class HomeScreenBloc extends ProtoBloc<IHomeScreenState> implements IHomeScreenService {
  constructor() {
    super(defaultAuthState)
  }

  getCategories = async () => {
    const categories = await delivery.MealAPI.getCategories()
  }
}

export default new HomeScreenBloc()
