export interface IMealAPIActions {
  getCategories: () => void;
}

export default interface IMealAppCore {
  MealAPI: IMealAPIActions;
}
