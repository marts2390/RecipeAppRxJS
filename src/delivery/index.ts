
import connector from './connector'
import MealAPI from './MealAPI'
import IMealAppCore from './interfaces'

class RecipeAppCore implements IMealAppCore {
  connector = connector

  MealAPI = MealAPI
}

export default new RecipeAppCore()
