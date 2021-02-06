export interface IActions {
  HomeScreenService: IHomeScreenService
}

export interface IHomeScreenService {
  getCategories: () => void;
}
