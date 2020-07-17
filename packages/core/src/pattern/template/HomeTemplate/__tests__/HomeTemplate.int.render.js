import React from 'react'
import { Provider } from 'react-redux'
import { store as storeLibrary } from '@papillonads/library'
import { state } from '../../../../state'
import { HomeTemplate } from '../index'

const {
  mock: { appState },
} = state
const { getAppMockStore } = storeLibrary

export const defaultRender = (
  <Provider store={getAppMockStore(appState)}>
    <HomeTemplate />
  </Provider>
)
