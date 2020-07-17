import { setAppCompleteStateThunk } from '../completeState'

jest.mock('redux', () => ({
  bindActionCreators: () => {},
}))
jest.mock('@papillonads/library', () => ({
  environment: {
    api: { setup: { authentication: { isUserSignedIn: false } } },
  },
}))
jest.mock('../../action/actionCreators', () => ({
  apiSetAuthenticationAction: () => {},
}))
jest.mock('../../../api', () => ({ getAccessToken: () => {}, login: () => {} }))

const reduxMockObject = require('redux')
const libraryMockObject = require('@papillonads/library')
const apiMockObject = require('../../../api')

describe('completeState', () => {
  const apiSetAuthenticationActionDataObject = { someActionData: 'fantastic-api-action-data' }

  const restResponseDataObject = { fantasticResponseData: 'fantastic-response-data' }

  const dispatchMockFn = jest.fn()

  const apiSetAuthenticationActionMockFn = jest.fn(() => apiSetAuthenticationActionDataObject)

  const bindActionCreatorsMockFn = jest.fn(() => {
    return {
      apiSetAuthenticationAction: apiSetAuthenticationActionMockFn,
    }
  })

  const getAccessTokenMockFn = jest.fn(() => Promise.resolve(restResponseDataObject))
  const loginMockFn = jest.fn(() => Promise.resolve(restResponseDataObject))

  beforeEach(() => {
    jest.spyOn(reduxMockObject, 'bindActionCreators').mockImplementation(bindActionCreatorsMockFn)
    jest.spyOn(apiMockObject, 'getAccessToken').mockImplementation(getAccessTokenMockFn)
    jest.spyOn(apiMockObject, 'login').mockImplementation(loginMockFn)
  })

  afterEach(() => jest.clearAllMocks())

  describe('setAppCompleteStateThunk()', () => {
    test('must dispatch apiSetAuthenticationAction() action with getAccessToken() response data when isUserSignedIn', async () => {
      libraryMockObject.environment.api.setup.authentication.isUserSignedIn = true

      await setAppCompleteStateThunk()(dispatchMockFn)

      await expect(apiSetAuthenticationActionMockFn).toHaveBeenCalledTimes(1)
      await expect(apiSetAuthenticationActionMockFn).toHaveBeenCalledWith(restResponseDataObject)
    })

    test('must not dispatch apiSetAuthenticationAction() action with getAccessToken() response data when not isUserSignedIn', async () => {
      libraryMockObject.environment.api.setup.authentication.isUserSignedIn = false

      await setAppCompleteStateThunk()(dispatchMockFn)

      await expect(apiSetAuthenticationActionMockFn).not.toHaveBeenCalled()
      await expect(apiSetAuthenticationActionMockFn).not.toHaveBeenCalled()
    })
  })
})
