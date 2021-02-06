import React, { FC, useEffect } from 'react'
import Home from 'view/screens/Home'

import styles from './View.module.scss'

interface IAppViewProps {
  testFunction: () => void
}

const AppComponent:FC<IAppViewProps> = ({ testFunction }) => {
  useEffect(() => {
    testFunction()
  }, [])

  return (
    <div className={ styles.App }>
      <Home />
    </div>
  )
}

export default AppComponent
