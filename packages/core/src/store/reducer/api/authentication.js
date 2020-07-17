export function apiSetAuthentication(state, action) {
  return {
    ...state,
    authentication: {
      ...action.payload,
    },
  }
}
