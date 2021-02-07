import React, { FC } from 'react'

import { IMealsDataModel } from 'models/mealsDataModel'

import RecipeCardComponent from './component'

interface IRecipeCardContainerProps {
  item: IMealsDataModel
}

const RecipeCardContainer:FC<IRecipeCardContainerProps> = ({ item }) => (
  <RecipeCardComponent
    item={ item }
  />
)

export default RecipeCardContainer
