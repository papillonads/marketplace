import { environment } from '@papillonads/library'

export async function getAccessToken() {
  const { protocol, targetHost, domain, paths, authentication, isMockingApiCalls } = environment.api.setup

  const url = `${protocol}://${targetHost}.${domain}/${paths.authorize}`

  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: `username=${authentication.username}&password=${authentication.password}`,
  }

  if (isMockingApiCalls) {
    return { accessToken: 'fantastic-access-token', isUserSignedIn: true }
  }

  const response = await window.fetch(url, options)

  return response.json()
}

export async function login(username, password) {
  const { protocol, targetHost, domain, paths, isMockingApiCalls } = environment.api.setup

  const url = `${protocol}://${targetHost}.${domain}/${paths.login}`

  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: `username=${username}&password=${password}`,
  }

  if (isMockingApiCalls) {
    return { accessToken: 'fantastic-access-token', isUserSignedIn: true }
  }

  const response = await window.fetch(url, options)

  return response.json()
}
