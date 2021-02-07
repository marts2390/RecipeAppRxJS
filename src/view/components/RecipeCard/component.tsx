import React, { FC } from 'react'
import {
  Card, CardMedia, CardContent, CardActionArea, Fade,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import { IMealsDataModel } from 'models/mealsDataModel'
import styles from './RecipeCard.module.scss'

interface IRecipeCardComponentProps {
  item: IMealsDataModel
}

const RecipeCardComponent:FC<IRecipeCardComponentProps> = ({ item }) => (
  <Link to={ `/recipes/${item.idMeal}` }>
    <Fade
      in
      timeout={ 500 }
    >
      <Card className={ styles.cardContainer }>
        <CardActionArea>
          <CardMedia
            className={ styles.mealImage }
            image={ item.strMealThumb }
            title={ item.strMeal }
          />
          <CardContent className={ styles.cardContent }>
            <p>{item.strMeal}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fade>
  </Link>
)

export default RecipeCardComponent
