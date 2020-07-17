import { createStore } from 'redux'
import { state } from '../state'
import { Store } from './base'
import { getAppReducer } from './reducer'
import { setAppCompleteStateThunk } from './thunk/completeState'

export class AppStore extends Store {
  constructor() {
    super()

    this.setAppDefaultState()
    this.setAppStore()
    this.setAppCompleteState()
    this.setHotModuleReloading()
  }

  /* istanbul ignore next */
  setAppDefaultState() {
    this.appState = state.default.appState
  }

  setAppStore() {
    this.appReducer = getAppReducer()
    this.clientAppStore = this.clientAppStore || createStore(this.appReducer, this.appState, this.enhancer)
  }

  async setAppCompleteState() {
    await this.clientAppStore.dispatch(setAppCompleteStateThunk())
  }

  /* istanbul ignore next */
  setHotModuleReloading() {
    if (module.hot) {
      module.hot.accept(['./reducer'], () => {
        const nextAppReducer = this.appReducer.default
        this.clientAppStore.replaceReducer(nextAppReducer)
      })
    }
  }
}

export const { clientAppStore } = new AppStore()
