import { getAccessToken, login } from '../authentication'

jest.mock('@papillonads/library', () => ({
  environment: {
    api: {
      setup: {
        protocol: 'fantastic-protocol',
        targetHost: 'fantastic-target-host',
        domain: 'fantastic-domain',
        paths: {
          authorize: 'fantastic-authorize',
          login: 'fantastic-login',
        },
        authentication: {
          username: 'fantastic-username',
          password: 'fantastic-password',
          isUserSignedIn: false,
        },
        isMockingApiCalls: false,
      },
    },
  },
}))

const libraryMockObject = require('@papillonads/library')

describe('authentication', () => {
  const fetchMockObject = { json: () => ({ fantasticResponse: 'fantastic-response' }) }

  const windowFetchMockFn = jest.fn(() => Promise.resolve(fetchMockObject))

  beforeEach(() => {
    jest.spyOn(window, 'fetch').mockImplementation(windowFetchMockFn)
  })

  afterEach(() => jest.clearAllMocks())

  describe('getAccessToken()', () => {
    test('must get regular authentication when isMockingApiCalls', async () => {
      libraryMockObject.environment.api.setup.isMockingApiCalls = true

      const response = await getAccessToken()

      await expect(windowFetchMockFn).not.toHaveBeenCalled()
      await expect(response).toMatchObject({ accessToken: 'fantastic-access-token', isUserSignedIn: true })
    })

    test('must get regular authentication when not isMockingApiCalls', async () => {
      libraryMockObject.environment.api.setup.isMockingApiCalls = false
      const { protocol, targetHost, domain, paths, authentication } = libraryMockObject.environment.api.setup

      const response = await getAccessToken()

      await expect(windowFetchMockFn).toHaveBeenCalledWith(`${protocol}://${targetHost}.${domain}/${paths.authorize}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        body: `username=${authentication.username}&password=${authentication.password}`,
      })
      await expect(response).toMatchObject(fetchMockObject.json())
    })
  })

  describe('login()', () => {
    test('must get regular authentication when isMockingApiCalls', async () => {
      libraryMockObject.environment.api.setup.isMockingApiCalls = true

      const response = await login()

      await expect(windowFetchMockFn).not.toHaveBeenCalled()
      await expect(response).toMatchObject({ accessToken: 'fantastic-access-token', isUserSignedIn: true })
    })

    test('must get regular authentication when not isMockingApiCalls', async () => {
      libraryMockObject.environment.api.setup.isMockingApiCalls = false
      const { protocol, targetHost, domain, paths, authentication } = libraryMockObject.environment.api.setup

      const response = await login(authentication.username, authentication.password)

      await expect(windowFetchMockFn).toHaveBeenCalledWith(`${protocol}://${targetHost}.${domain}/${paths.login}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        body: `username=${authentication.username}&password=${authentication.password}`,
      })
      await expect(response).toMatchObject(fetchMockObject.json())
    })
  })
})
