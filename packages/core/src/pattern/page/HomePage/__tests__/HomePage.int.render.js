import React from 'react'
import { Provider } from 'react-redux'
import { store as storeLibrary } from '@papillonads/library'
import { state } from '../../../../state'
import { AsyncHomePage } from '../AsyncHomePage'
import { HomePage } from '../HomePage'

const {
  mock: { appState },
} = state
const { getAppMockStore } = storeLibrary

export const asyncRender = (
  <Provider store={getAppMockStore(appState)}>
    <AsyncHomePage />
  </Provider>
)

export const defaultRender = (
  <Provider store={getAppMockStore(appState)}>
    <HomePage />
  </Provider>
)
