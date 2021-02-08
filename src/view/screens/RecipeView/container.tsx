import React, { PureComponent } from 'react'
import UC from 'actions'

import { Match } from 'models/reactRouterDomModel'

import RecipeViewComponent from './component'

interface IRouterProps {
  recipeId: string;
}

interface IRecipeViewContainerProps {
  match: Match<IRouterProps>;
}

class RecipeViewContainer extends PureComponent<IRecipeViewContainerProps> {
  componentDidMount() {
    const { match } = this.props
    const { recipeId } = match.params

    if (recipeId) {
      UC.RecipeScreenService.getRecipeData(recipeId)
    }
  }

  render() {
    return (
      <RecipeViewComponent />
    )
  }
}

export default RecipeViewContainer
