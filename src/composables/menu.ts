import type { Menu } from '@/types/menu'
import { ref } from 'vue'
import { useFetch } from './fetch'

export function useMenu() {
  const menu = ref<Menu[] | null>([])
  const menuItem = ref<Menu | null>(null)

  async function getMenu(page: number = 1, type?: string) {
    let url = `menu?page=${page}`
    if (type) {
      url += `&type_id=${type}`
    }

    const { count, data, err } = await useFetch(url)
    if (err) throw err
    return { count, data }
  }

  async function getMenuById(id: string) {
    const { data, err } = await useFetch(`menu/${id}`)
    if (err) throw err
    return { data }
  }

  return { menu, menuItem, getMenu, getMenuById }
}
