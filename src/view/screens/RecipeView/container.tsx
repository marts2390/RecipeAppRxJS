import React, { FC, useEffect } from 'react'
import UC from 'actions'

import { Match } from 'models/reactRouterDomModel'

import RecipeViewComponent from './component'

interface IRouterProps {
  recipeId: string;
}

interface IRecipeViewContainerProps {
  match: Match<IRouterProps>;
}

const RecipeViewContainer:FC<IRecipeViewContainerProps> = ({ match }) => {
  useEffect(() => {
    const { recipeId } = match.params

    if (recipeId) {
      UC.RecipeScreenService.getRecipeData(recipeId)
    }
  })

  return (
    <RecipeViewComponent />
  )
}

export default RecipeViewContainer
