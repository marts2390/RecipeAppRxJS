import React, { FC } from 'react'

import { useObservable } from 'rxjs-hooks'
import UC from 'actions'

import RecipeViewIngredientsComponent from './component'

const RecipeViewIngredientsContainer:FC = () => {
  const { recipeData, ingredientsList, isLoaded } = useObservable(UC.RecipeScreenService.getSubject)
|| UC.RecipeScreenService.getCurrentState()

  return (
    <RecipeViewIngredientsComponent
      ingredientsList={ ingredientsList }
      recipeMethod={ recipeData && recipeData.strInstructions }
      isLoaded={ isLoaded }
    />
  )
}

export default RecipeViewIngredientsContainer
