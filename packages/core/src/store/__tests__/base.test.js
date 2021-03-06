import { Store } from '../base'

jest.mock('redux', () => ({ applyMiddleware: () => {}, compose: () => {} }))
jest.mock('redux-logger', () => ({ createLogger: () => {} }))
jest.mock('redux-thunk', () => ({ applyMiddleware: () => {}, compose: () => {} }))
jest.mock('@papillonads/library', () => ({
  environment: {
    host: {
      isRunningOnLocalHost: true,
    },
  },
}))

const reduxMockObject = require('redux') // eslint-disable-line
const reduxLoggerMockObject = require('redux-logger')
const reduxThunkMockObject = require('redux-thunk')
const libraryMockObject = require('@papillonads/library')

describe('index', () => {
  const createLoggerMockObject = { someLogger: 'fantastic-logger' }

  const createLoggerMockFn = jest.fn(() => createLoggerMockObject)

  beforeEach(() => {
    jest.spyOn(reduxLoggerMockObject, 'createLogger').mockImplementation(createLoggerMockFn)
  })

  afterEach(() => jest.clearAllMocks())

  describe('setMiddlewares()', () => {
    test('must have thunk and logger middleware when running on localhost', () => {
      libraryMockObject.environment.host.isRunningOnLocalHost = true

      const store = new Store()

      expect(reduxLoggerMockObject.createLogger).toHaveBeenCalledTimes(1)
      expect(store.middlewares).toMatchObject([reduxThunkMockObject, createLoggerMockObject])
    })

    test('must only have thunk middleware when not running on localhost', () => {
      libraryMockObject.environment.host.isRunningOnLocalHost = false

      const store = new Store()

      expect(reduxLoggerMockObject.createLogger).not.toHaveBeenCalled()
      expect(store.middlewares).toMatchObject([reduxThunkMockObject])
    })
  })
})
