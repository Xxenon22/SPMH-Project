import { useFetch } from '@/composables/fetch'
import router from '@/router'
import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Credentials {
  name?: string
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', () => {
  const TOKEN_KEY = 'vino-access-token'

  const token = ref({
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
        token.value.set(result.token!)
        router.push({ name: 'home' })
        await getUser()
      }
    } catch (err) {
      console.error('error when logging in: ', err)
      return null
    }
  }

  async function signUp({ name, email, password }: Credentials) {
    try {
      const result = await useFetch('signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      })

      if (result.err) throw new Error(result.message)
      token.value.set(result.token!)
      await getUser()
    } catch (error) {
      console.error(error)
    }
  }

  async function getUser() {
    const authToken = token.value.get()
    if (!authToken) return

    try {
      const { data, err } = await useFetch('api/user', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      })

      if (err) throw err
      user.value = data as User
    } catch (error) {
      console.error(error)
    }
  }

  return { user, token, logIn, signUp, getUser }
})
