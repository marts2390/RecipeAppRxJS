import React, { FC } from 'react'
import { Grid } from '@material-ui/core'

import RecipeCard from 'view/components/RecipeCard'

import { IMealsDataModel } from 'models/mealsDataModel'

interface IHomeComponentProps {
  meals: IMealsDataModel[] | null
}

const HomeComponent:FC<IHomeComponentProps> = ({ meals }) => (
  <div>
    <Grid
      container
      spacing={ 3 }
    >
      {meals?.map((item) => (
        <Grid
          item
          xs={ 6 }
          sm={ 4 }
          md={ 3 }
          lg={ 2 }
          xl={ 1 }
          key={ item.idMeal }
        >
          <RecipeCard item={ item } />
        </Grid>
      ))}
    </Grid>
  </div>
)

export default HomeComponent
