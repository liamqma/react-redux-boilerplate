import { createStore } from 'redux';
import rootReducer from '../module/reducer';

export default function configureStore(initialState) {
  /* eslint-disable max-len */
  const middleware = typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f;
  /* eslint-enable max-len */

  const store = createStore(
    rootReducer,
    initialState,
    middleware
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../module/reducer', () => {
      /* eslint-disable global-require */
      const nextRootReducer = require('../module/reducer').default;
      /* eslint-enable global-require */
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
