
import React, {
  createContext, Dispatch, useContext, useReducer,
} from 'react'

import {
  initialState, IStore, mainReducer, TActions,
} from './mainReducer'

// Store and Dispatch Contexts for view
const storeContext: React.Context<IStore> = createContext(initialState)
const dispatchContext: React.Context<Dispatch<TActions>> = createContext((() => 0) as React.Dispatch<TActions>)

export interface IStateProviderProps {
  children: React.ReactNode | React.ReactNodeArray | null;
}

export const StoreProvider: React.FunctionComponent<IStateProviderProps> = ({ children }) => {
  const [store, dispatch] = useReducer(mainReducer, initialState)
  // middlewares should be used here

  // console.log(store) // use it for searching state status

  return (
    <storeContext.Provider value={ store }>
      <dispatchContext.Provider value={ dispatch }>
        { children }
      </dispatchContext.Provider>
    </storeContext.Provider>
  )
}

// consumer as hook
export const useStore = () => useContext(storeContext)
export const useDispatch = () => useContext(dispatchContext)
