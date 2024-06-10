import type { Menu } from '@/types/menu'
import { ref } from 'vue'
import { useFetch } from './fetch'

export function useMenu() {
  const menu = ref<Menu[] | null>([])

  async function getMenu(page: number = 1) {
    const { count, data, err } = await useFetch(`menu?page=${page}`)
    if (err) throw err
    return { count, data }
  }

  return { menu, getMenu }
}
