import { bindActionCreators } from 'redux'
import { environment as environmentLibrary } from '@papillonads/library'
import * as actionCreators from '../action/actionCreators'
import { getAccessToken } from '../../api'

export const setAppCompleteStateThunk = () => async (dispatch) => {
  const { apiSetAuthenticationAction } = bindActionCreators(actionCreators, dispatch)

  const {
    api: { setup },
  } = environmentLibrary

  if (setup.authentication.isUserSignedIn) {
    const getAccessTokenResponseData = await getAccessToken()
    apiSetAuthenticationAction(getAccessTokenResponseData)
  }
}
