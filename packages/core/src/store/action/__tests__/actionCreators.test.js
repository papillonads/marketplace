import { apiSetAuthenticationAction } from '../actionCreators'

describe('actionCreators', () => {
  const payload = { somePayload: 'fantastic-payload' }

  describe('api', () => {
    describe('apiSetAuthenticationAction()', () => {
      test('must return action with given payload', () => {
        expect(apiSetAuthenticationAction(payload)).toMatchObject({ type: 'API_SET_AUTHENTICATION', payload })
      })
    })
  })
})
