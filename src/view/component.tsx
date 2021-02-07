import React, { FC, useEffect } from 'react'
import AppRouter from 'view/routers/AppRouter'

import LoaderComponent from 'view/components/Loader'

import styles from './View.module.scss'

interface IAppViewProps {
  initialLoad: () => void
  isLoaded: boolean;
}

const AppComponent:FC<IAppViewProps> = ({ initialLoad, isLoaded }) => {
  useEffect(() => {
    initialLoad()
  }, [])

  return (
    <div className={ styles.appScreen }>
      {isLoaded ? (
        <AppRouter />
      ) : (
        <div className={ styles.spinnerContainer }>
          <LoaderComponent />
        </div>
      )}
    </div>
  )
}

export default AppComponent
