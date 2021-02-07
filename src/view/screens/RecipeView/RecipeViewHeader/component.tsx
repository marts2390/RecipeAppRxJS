import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Grid, Fade, Button } from '@material-ui/core'

import cn from 'classnames'
import styles from './RecipeViewHeader.module.scss'

interface IRecipeViewHeaderComponentProps {
  backgroundImage?: string;
  title?: string;
  category?: string;
  area?: string;
  videoLink?: string;
}

const RecipeViewHeaderComponent: FC<IRecipeViewHeaderComponentProps> = ({
  backgroundImage, title, category, area, videoLink,
}) => (
  <div className={ styles.recipeView }>
    <Fade
      in
      timeout={ 500 }
    >
      <div className={ styles.header }>
        <Grid
          container
          spacing={ 2 }
          alignContent="flex-start"
        >
          <Grid
            item
            xs={ 12 }
            sm={ 4 }
            md={ 3 }
          >
            <div
              className={ styles.thumbnailImage }
              style={ { backgroundImage: `url(${backgroundImage})` } }
            />
          </Grid>
          <Grid
            item
            xs={ 12 }
            sm={ 8 }
            md={ 9 }
          >
            <div className={ styles.headerContent }>
              <div>
                <h2>{title}</h2>
                <h3>{`Area: ${area}`}</h3>
                <h3>{`Category: ${category}`}</h3>
              </div>
              <div className={ styles.buttonGroup }>
                <Link to="/">
                  <Button
                    variant="contained"
                    color="primary"
                    className={ cn(styles.homeButton, styles.button) }
                  >Take me back
                  </Button>
                </Link>
                {videoLink !== '' && (
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={ videoLink }
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    className={ styles.button }
                  >Watch the Method
                  </Button>
                </a>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Fade>
  </div>
)

export default RecipeViewHeaderComponent
