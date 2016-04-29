import {createStore} from 'redux'
import rootReducer from '../module/reducer'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../module/reducer', () => {
      const nextRootReducer = require('../module/reducer').default;
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
