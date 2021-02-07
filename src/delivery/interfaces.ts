export interface IMealAPIActions {
  getCategories: () => void;
  getRecipesByCategory: (category: string) => void;
  getRecipeData: (id:string) => void;
}

export default interface IMealAppCore {
  MealAPI: IMealAPIActions;
}
