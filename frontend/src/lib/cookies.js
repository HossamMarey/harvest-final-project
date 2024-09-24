


import Cookies from "js-cookie";



const TOKEN_NAME = 'AUTH_TOKEN'

export const setAuthCookie = (token) => {
  Cookies.set(TOKEN_NAME, token, {
    expires: 30,
    // sameSite: "strict",
    // secure: true
  })
}

export const getAuthCookie = () => {
  return Cookies.get(TOKEN_NAME)
}

export const checkAuthToken = () => {
  return !!getAuthCookie()
} 