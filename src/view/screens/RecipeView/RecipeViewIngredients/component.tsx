import React, { FC } from 'react'

import { Grid, Fade } from '@material-ui/core'

import styles from './RecipeViewIngredients.module.scss'

interface IRecipeViewIngredientsComponentProps {
  ingredientsList: string[]
  recipeMethod: string | null;
}

const RecipeViewIngredientsComponent: FC<IRecipeViewIngredientsComponentProps> = ({
  ingredientsList, recipeMethod,
}) => (
  <Fade
    in
    timeout={ 500 }
  >
    <div className={ styles.ingredientsContainer }>
      <Grid
        container
        spacing={ 2 }
      >
        <Grid
          item
          xs={ 12 }
          md={ 3 }
        >
          <div className={ styles.ingredientsList }>
            <h4>Ingredients</h4>
            <div className={ styles.ingredientsItem }>
              <Grid
                container
                spacing={ 2 }
              >
                {ingredientsList.map((item) => (
                  <Grid
                    item
                    key={ item }
                    xs={ 6 }
                    sm={ 4 }
                    md={ 12 }
                  >
                    <p>{item}</p>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={ 12 }
          md={ 9 }
        >
          <div className={ styles.instructions }>
            <h4>Method</h4>
            <p>{recipeMethod}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  </Fade>
)

export default RecipeViewIngredientsComponent
