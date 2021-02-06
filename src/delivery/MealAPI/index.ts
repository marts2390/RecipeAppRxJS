import ApiConnector from '../connector'
import { IMealAPIActions } from '../interfaces'

class MealAPIActions implements IMealAPIActions {
  getCategories =  async () => {
    const result = {
      value: null,
      error: null,
    }

    try {
      const response = await ApiConnector.connector.get('categories.php')

      console.log(response)

      if (response.status === 200) {
        result.value = response.data.totalLimitBytes
      } else {
        result.error = new Error(`API error, status: ${response.status}`)
      }
    } catch (error) {
      result.error = new Error('Network error, try again late')
    }

    return result
  }

  }
}

export default new MealAPIActions()
