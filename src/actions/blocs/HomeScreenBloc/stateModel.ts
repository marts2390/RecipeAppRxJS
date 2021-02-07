import { ICategoriesDataModel } from 'models/categoriesDataModel'
import { IMealsDataModel } from 'models/mealsDataModel'

export interface IHomeScreenState {
  categoriesData: ICategoriesDataModel[]
  mealsData: IMealsDataModel[] | null
  isLoaded: boolean;
  mealsLoading: boolean;
  currentCategory: string;
}
