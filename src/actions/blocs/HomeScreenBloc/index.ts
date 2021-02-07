
import { IHomeScreenService } from 'actions/interface'
import delivery from 'delivery'
import { ProtoBloc } from '../ProtoBloc'
import { IHomeScreenState } from './stateModel'


const defaultAuthState: IHomeScreenState = {
  categoriesData: [],
  mealsData: null,
  isLoaded: false,
  mealsLoading: false,
  currentCategory: 'Beef'
}

class HomeScreenBloc extends ProtoBloc<IHomeScreenState> implements IHomeScreenService {
  constructor() {
    super(defaultAuthState)
  }

  initialLoad = async () => {
    await this.getCategories()

    // Set a default category for initial load
    await this.getRecipesByCategory(this.state.currentCategory)
    this.setLoader()
  }

  getCategories = async () => {
    const { value, error } = await delivery.MealAPI.getCategories()
    const newState = { ...this.state }

    if (error) {
      console.warn('Request Failed')

      return
    }

    if (value) {
      newState.categoriesData = value.categories

      this.pushState(newState)
    }
  }

  getRecipesByCategory = async (category: string) => {
    const { value, error } = await delivery.MealAPI.getRecipesByCategory(category)
    const newState = { ...this.state }

    if (error) {
      console.warn('Request Failed')

      return
    }

    if (value) {
      newState.mealsData = value.meals
      newState.currentCategory = category
      this.pushState(newState)
    }
  }

  private setLoader = () => {
    this.pushState({
      ...this.state,
      isLoaded: true,
    })
  }
}

export default new HomeScreenBloc()
