import React, { FC } from 'react'

import RecipeViewHeader from './RecipeViewHeader'
import RecipeViewIngredients from './RecipeViewIngredients'

import styles from './RecipeView.module.scss'

const RecipeViewComponent: FC = () => (
  <div className={ styles.recipeView }>
    <RecipeViewHeader />
    <RecipeViewIngredients />
  </div>
)

export default RecipeViewComponent
