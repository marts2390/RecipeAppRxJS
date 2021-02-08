import React, { FC } from 'react'
import UC from 'actions'
import { useObservable } from 'rxjs-hooks'

import { Match } from 'models/reactRouterDomModel'

import RecipeViewComponent from './component'

interface IRouterProps {
  recipeId: string;
}

interface IRecipeViewContainerProps {
  match: Match<IRouterProps>;
}

const RecipeViewContainer:FC<IRecipeViewContainerProps> = ({ match }) => {
  const { isLoaded } = useObservable(UC.RecipeScreenService.getSubject) || UC.RecipeScreenService.getCurrentState()
  const { recipeId } = match.params

  return (
    <RecipeViewComponent
      getRecipeData={ UC.RecipeScreenService.getRecipeData }
      resetState={ UC.RecipeScreenService.setDefaultState }
      recipeId={ recipeId }
      isLoaded={ isLoaded }
    />
  )
}

export default RecipeViewContainer
