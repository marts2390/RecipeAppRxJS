import React, { FC } from 'react'
import { useObservable } from 'rxjs-hooks'
import UC from 'actions'

import HomeComponent from './component'

const HomeContainer:FC = () => {
  const { categoriesData } = useObservable(UC.HomeScreenService.getSubject) || UC.HomeScreenService.getCurrentState()

  return (
    <HomeComponent
      categories={ categoriesData }
      getRecipesByCategory={ UC.HomeScreenService.getRecipesByCategory }
    />
  )
}

export default HomeContainer
