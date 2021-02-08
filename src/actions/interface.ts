export interface IActions {
  HomeScreenService: IHomeScreenService
  RecipeScreenService: IRecipeScreenService
}

export interface IHomeScreenService {
  initialLoad: () => void;
  getCategories: () => void;
  getRecipesByCategory: (category: string) => void;
}

export interface IRecipeScreenService {
  getRecipeData: (id: string) => void;
  setDefaultState: () => void;
}
