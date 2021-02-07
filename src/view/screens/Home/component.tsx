import React, { FC } from 'react'
import { ICategoriesDataModel } from 'models/categoriesDataModel'

import Slider from 'view/components/Slider'
import RecipeList from './RecipeList'

import styles from './Main.module.scss'

interface IHomeComponentProps {
  categories: ICategoriesDataModel[]
  getRecipesByCategory: (category: string) => void;
}

const HomeComponent:FC<IHomeComponentProps> = ({ categories, getRecipesByCategory }) => (
  <div className={ styles.homeScreen }>
    <h1>Recipe App</h1>
    <div className={ styles.header }>
      <h4>Select a Category</h4>
      <Slider
        sliderItems={ categories }
        sliderAction={ getRecipesByCategory }
      />
    </div>
    <div className={ styles.body }>
      <RecipeList />
    </div>
  </div>
)

export default HomeComponent
