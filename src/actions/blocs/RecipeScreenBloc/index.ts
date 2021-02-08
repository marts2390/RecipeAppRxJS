
import { IRecipeScreenService } from 'actions/interface'
import delivery from 'delivery'
import { IRecipeDataModel } from 'models/recipeDataModel'
import { ProtoBloc } from '../ProtoBloc'
import { IRecipeScreenState } from './stateModel'


const defaultRecipeScreenState: IRecipeScreenState = {
  recipeData: null,
  ingredientsList: [],
  isLoaded: false,
}

class RecipeScreenBloc extends ProtoBloc<IRecipeScreenState> implements IRecipeScreenService {
  constructor() {
    super(defaultRecipeScreenState)
  }

  getRecipeData = async (id: string) => {
    const { value, error } = await delivery.MealAPI.getRecipeData(id)

    if (error) {
      console.warn('Request Failed')

      return
    }

    this.pushState({
      ...this.state,
      isLoaded: false,
    })

    if (value) {
      const ingredientsList: IRecipeDataModel[] = []
      const ingredientsAmounts: string[] = []
      const ingredientsFullList: string[] = []

      const removeEmptyString = Object.fromEntries(
        Object.entries(value.meals[0]).filter(([key, desc]) => desc !== '')
      )

      const removeNullValues = Object.fromEntries(
        Object.entries(removeEmptyString).filter(([key, desc]) => desc !== null)
      )

      // Get all ingredients
      Object.keys(removeNullValues).forEach((item) => {
        if (item.includes('Ingredient')) {
          ingredientsList.push(value.meals[0][item])
        }
      })

      // Get all ingredient measures
      Object.keys(removeNullValues).forEach((item) => {
        if (item && item.includes('Measure')) {
          ingredientsAmounts.push(value.meals[0][item])
        }
      })

      // Map ingredients and measures into one string
      ingredientsList.forEach((item, index) => {
        const string = `${item}: ${ingredientsAmounts[index]}`
        ingredientsFullList.push(string)
      })

      this.pushState({
        recipeData: value.meals[0],
        ingredientsList: ingredientsFullList,
        isLoaded: true,
      })
    }
  }

  setDefaultState = () => {
    this.pushState(defaultRecipeScreenState)
  }
}

export default new RecipeScreenBloc()
