import { IFunctionResultModel } from 'models/functionResultModel'
import { ICategoriesResponseModel } from 'models/categoriesResponseModel'
import { IMealsResponseModel } from 'models/mealsResponseModel'
import { IRecipeResponseModel } from 'models/recipeResponseModel'
import ApiConnector from '../connector'
import { IMealAPIActions } from '../interfaces'

class MealAPIActions implements IMealAPIActions {
  getCategories = async () => {
    const result: IFunctionResultModel<ICategoriesResponseModel | null> = {
      value: null,
      error: null,
    }

    try {
      const response = await ApiConnector.connector.get('categories.php')

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

  getRecipesByCategory = async (category: string) => {
    const result: IFunctionResultModel<IMealsResponseModel | null> = {
      value: null,
      error: null,
    }

    try {
      const response = await ApiConnector.connector.get(`filter.php?c=${category}`)

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

  getRecipeData = async (id: string) => {
    const result: IFunctionResultModel<IRecipeResponseModel | null> = {
      value: null,
      error: null,
    }

    try {
      const response = await ApiConnector.connector.get(`lookup.php?i=${id}`)

      if (response.status === 200) {
        const value = response.data
        result.value = value
      } else {
        result.error = new Error(`API error, status: ${response.status}`)
      }
    } catch (error) {
      result.error = new Error('Network error')
    }

    return result
  }
}

export default new MealAPIActions()
