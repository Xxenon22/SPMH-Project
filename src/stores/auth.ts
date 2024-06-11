import { useFetch } from '@/composables/fetch'
import router from '@/router'
import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Credentials {
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', () => {
  const token = ref('')
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
        token.value = result.token!
        document.cookie = `vino-access-token=${token.value}`
        router.push({ name: 'home' })
      }
    } catch (err) {
      console.error('error when logging in: ', err)
      return null
    }
  }

  return { user, logIn }
})
