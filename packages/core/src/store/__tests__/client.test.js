jest.mock('redux', () => ({
  createStore: () => ({ dispatch: jest.fn() }),
  applyMiddleware: jest.fn(),
  compose: jest.fn(),
  combineReducers: jest.fn(),
}))
jest.mock('redux-logger', () => ({ createLogger: () => {} }))
jest.mock('redux-thunk', () => ({ applyMiddleware: () => {}, compose: () => {} }))

jest.mock('@papillonads/library', () => {
  const items = [
    { isCurrent: false, index: 0 },
    { isCurrent: false, index: 1 },
    { isCurrent: true, index: 2 },
    { isCurrent: false, index: 3 },
    { isCurrent: false, index: 4 },
    { isCurrent: false, index: 5 },
    { isCurrent: false, index: 6 },
  ]

  return {
    array: {
      getRange: () => {
        return items
      },
    },
    environment: {
      host: {
        isRunningOnLocalHost: true,
      },
    },
  }
})
jest.mock('../../state', () => {
  return {
    state: {
      default: {
        appState: { fantasticAppState: 'fantastic-app-state' },
      },
    },
  }
})
jest.mock('../reducer', () => ({ getAppReducer: () => {} }))
jest.mock('../thunk/completeState', () => ({ setAppCompleteStateThunk: () => {} }))

const reduxMockObject = require('redux') // eslint-disable-line
const reduxLoggerMockObject = require('redux-logger') // eslint-disable-line
const reduxThunkMockObject = require('redux-thunk') // eslint-disable-line
const libraryMockObject = require('@papillonads/library') // eslint-disable-line
const stateMockObject = require('../../state') // eslint-disable-line
const reducerMockObject = require('../reducer')

describe('client', () => {
  beforeEach(() => {
    jest.spyOn(reducerMockObject, 'getAppReducer').mockImplementation(jest.fn())
  })

  afterEach(() => jest.clearAllMocks())

  describe('setAppDefaultState()', () => {
    test('must set app state', async () => {
      const { AppStore } = await import('../client')

      const clientAppStore = new AppStore()

      expect(clientAppStore.appState).toMatchObject(stateMockObject.state.default.appState)
    })
  })
})
