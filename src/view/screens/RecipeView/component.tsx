import React, { PureComponent } from 'react'

import Loader from 'view/components/Loader'
import RecipeViewHeader from './RecipeViewHeader'
import RecipeViewIngredients from './RecipeViewIngredients'

import styles from './RecipeView.module.scss'

interface IRecipeViewComponentProps {
  getRecipeData: (recipeId: string) => void;
  resetState: () => void;
  recipeId: string;
  isLoaded: boolean;
}

class RecipeViewComponent extends PureComponent<IRecipeViewComponentProps> {
  componentDidMount() {
    this.getData()
  }

  componentWillUnmount() {
    const { resetState } = this.props

    resetState()
  }

  getData = () => {
    const { getRecipeData, recipeId } = this.props

    if (recipeId) {
      getRecipeData(recipeId)
    }
  }

  render() {
    const { isLoaded } = this.props
    return (
      <div>
        {isLoaded ? (
          <div className={ styles.recipeView }>
            <RecipeViewHeader />
            <RecipeViewIngredients />
          </div>
        ) : (
          <div className={ styles.spinnerContainer }>
            <Loader />
          </div>
        )}
      </div>
    )
  }
}

export default RecipeViewComponent
