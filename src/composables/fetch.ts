import type { Menu } from '@/types/menu'
import { ref } from 'vue'

interface Response {
  count: number
  data: Menu[]
  err: boolean
}

export async function useFetch(path: string) {
  const url = import.meta.env.VITE_API_URL

  const data = await fetch(`${url}/${path}`)
  const response = await data.json()

  if (response.err) {
    throw response.err
  }

  return response as Response
}
