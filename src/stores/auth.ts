import { useFetch } from '@/composables/fetch'
import router from '@/router'
import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

interface Credentials {
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', () => {
  const TOKEN_KEY = 'vino-access-token'

  const token = reactive({
    value: '',
    set(newValue: string) {
      this.value = newValue
      localStorage.setItem(TOKEN_KEY, this.value)
    },
    get() {
      this.value = localStorage.getItem(TOKEN_KEY) || ''
      return this.value
    },
  })

  const user = ref<User | null>(null)

  async function logIn({ email, password }: Credentials) {
    const data = JSON.stringify({
      email: email,
      password: password,
    })

    try {
      const result = await useFetch(`login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      })

      if (result) {
        console.log(result)
        token.set(result.token!)
        router.push({ name: 'home' })
      }
    } catch (err) {
      console.error('error when logging in: ', err)
      return null
    }
  }

  async function getUser() {
    const authToken = token.get()
    if (!authToken) return

    try {
      const { data, err } = await useFetch('api/user', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      })

      if (err) throw err
      user.value = data
    } catch (error) {
      console.error(error)
    }
  }

  return { user, logIn, getUser }
})
