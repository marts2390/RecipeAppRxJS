import React, { FC, useState, useEffect } from 'react'
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext
} from 'pure-react-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'

import { ICategoriesDataModel } from 'models/categoriesDataModel'

import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from './Slider.module.scss'

interface ISliderComponentProps {
  sliderItems:ICategoriesDataModel[]
  sliderAction: (category: string) => void;
}

const SliderComponent: FC<ISliderComponentProps> = ({ sliderItems, sliderAction }) => {
  const backButtonClasses = cn(styles.backButton, styles.controlButton)
  const nextButtonClasses = cn(styles.nextButton, styles.controlButton)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  let slidesToShow = 1
  if (windowWidth > 400 && windowWidth < 767) {
    slidesToShow = 2
  } else if (windowWidth > 768 && windowWidth < 999) {
    slidesToShow = 4
  } else if (windowWidth > 1000 && windowWidth < 1599) {
    slidesToShow = 6
  } else if (windowWidth > 1600) {
    slidesToShow = 10
  }

  return (
    <CarouselProvider
      naturalSlideWidth={ 50 }
      naturalSlideHeight={ 40 }
      totalSlides={ sliderItems?.length }
      visibleSlides={ slidesToShow }
      step={ 1 }
      className={ styles.slider }
      isIntrinsicHeight
    >
      <Slider>
        {sliderItems?.map((item, index) => (
          <Slide
            index={ index }
            key={ item.idCategory }
          >
            <div
              className={ styles.categoryCard }
              style={ { backgroundImage: `url(${item.strCategoryThumb})` } }
            >
              <div
                role="button"
                onKeyDown={ (e) => e.key === 'Enter' && sliderAction(item.strCategory) }
                className={ styles.cardOverlay }
                onClick={ () => sliderAction(item.strCategory) }
              >
                <h3 className={ styles.title }>{item.strCategory}</h3>
              </div>
            </div>
          </Slide>
        ))}
      </Slider>
      <ButtonBack className={ backButtonClasses }>
        <FontAwesomeIcon icon={ faChevronLeft } />
      </ButtonBack>
      <ButtonNext className={ nextButtonClasses }>
        <FontAwesomeIcon icon={ faChevronRight } />
      </ButtonNext>
    </CarouselProvider>
  )
}

export default SliderComponent
