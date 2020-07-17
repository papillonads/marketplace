import { applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { environment } from '@papillonads/library'

class Store {
  constructor() {
    this.setMiddlewares()
    this.setEnhancer()
  }

  setMiddlewares() {
    const { isRunningOnLocalHost } = environment.host

    this.middlewares = [thunk]

    if (isRunningOnLocalHost) {
      const logger = createLogger({
        collapsed: true,
        logger: console,
      })

      this.middlewares.push(logger)
    }

    return this.middlewares
  }

  /* istanbul ignore next */
  setEnhancer() {
    const { isRunningOnLocalHost } = environment.host

    const composeEnhancers =
      typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && isRunningOnLocalHost
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose

    this.enhancer = composeEnhancers(applyMiddleware(...this.middlewares))
  }
}

export { Store }
