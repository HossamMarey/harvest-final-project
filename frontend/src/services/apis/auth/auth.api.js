import { setAuthCookie } from "@/lib";
import clientApi from "../../clientApi";

export const login = async ({ email, password }) => {
  const response = await clientApi.post('/auth/login', {
    email, password
  })

  const token = response?.data?.token

  if (!token) throw new Error('Invalid credentials')
  setAuthCookie(token)

  return response?.data
}


export const register = async ({ email, password, name, phone }) => {
  const response = await clientApi.post('/auth/register', {
    email, password, name, phone
  })
  return response?.data
}


