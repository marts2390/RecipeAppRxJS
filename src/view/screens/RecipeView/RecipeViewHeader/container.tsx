import React, { FC } from 'react'

import { useObservable } from 'rxjs-hooks'
import UC from 'actions'

import RecipeViewHeaderComponent from './component'


const RecipeViewHeaderContainer:FC = () => {
  const { recipeData } = useObservable(UC.RecipeScreenService.getSubject)
  || UC.RecipeScreenService.getCurrentState()

  return (
    <RecipeViewHeaderComponent
      backgroundImage={ recipeData?.strMealThumb }
      title={ recipeData?.strMeal }
      category={ recipeData?.strCategory }
      area={ recipeData?.strArea }
      videoLink={ recipeData?.strYoutube }
    />
  )
}

export default RecipeViewHeaderContainer
