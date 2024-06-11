import { useFetch } from '@/composables/fetch'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Credentials {
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref()

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

      return result
    } catch (err) {
      console.error('error when logging in: ', err)
      return null
    }
  }

  return { user, logIn }
})
