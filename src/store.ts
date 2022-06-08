import { createStore, applyMiddleware, combineReducers, Store } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'
import { Persistor, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { FiltrosState, filtrosReducer } from './ducks'

export interface RootState {
  filtros: FiltrosState
}

// initial states here
export interface _Store extends Store {
  _persistor: Persistor
}

const persistReducerRootConfigs = {
  key: 'root',
  storage
}

const obterReducerRoot = () => {
  return combineReducers<RootState>({
    filtros: filtrosReducer
  })
}

const makeStore = () => {
  const reducerPersistido = persistReducer(
    persistReducerRootConfigs,
    obterReducerRoot()
  )

  const store = createStore(
    reducerPersistido,
    applyMiddleware(thunkMiddleware)
  ) as _Store
  store._persistor = persistStore(store)

  return store
}

export const storeWrapper = createWrapper(makeStore)
