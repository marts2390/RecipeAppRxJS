import { IRecipeDataModel } from 'models/recipeDataModel'

export interface IRecipeScreenState {
  recipeData: IRecipeDataModel | null;
  ingredientsList: string[];
}
