import type { Menu } from '@/types/menu'

interface Response {
  count?: number
  data?: Menu[] | Menu
  err: boolean
  message?: string
  token?: string
}

export async function useFetch(path: string, options?: RequestInit) {
  const url = import.meta.env.VITE_API_URL

  const data = await fetch(`${url}/${path}`, options)
  const response = await data.json()

  if (response.err) {
    throw new Error(response.message)
  }

  return response as Response
}
