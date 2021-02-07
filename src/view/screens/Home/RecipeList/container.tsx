import React, { FC } from 'react'
import { useObservable } from 'rxjs-hooks'
import UC from 'actions'

import RecipeListComponent from './component'

const RecipeListContainer:FC = () => {
  const { mealsData } = useObservable(UC.HomeScreenService.getSubject)
  || UC.HomeScreenService.getCurrentState()

  return (
    <RecipeListComponent meals={ mealsData } />
  )
}

export default RecipeListContainer
