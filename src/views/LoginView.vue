<script setup lang="ts">
import TextInput from '@/components/TextInput.vue'
import BaseLayout from '../layouts/BaseLayout.vue'
import { useAuthStore } from '@/stores/auth'
import { reactive } from 'vue'
import AuthForm from '@/components/AuthForm.vue'

const authStore = useAuthStore()
const credentials = reactive({
  email: '',
  password: '',
})

async function logIn() {
  await authStore.logIn(credentials)
}
</script>

<template>
  <BaseLayout>
    <div
      class="grid grid-cols-[1fr_minmax(60ch,1fr)_1fr] items-center min-h-screen"
    >
      <AuthForm @submit.prevent="logIn">
        <h1 class="text-center z-10">Login</h1>
        <TextInput
          type="email"
          placeholder="Email"
          required
          v-model="credentials.email"
        />
        <TextInput
          type="password"
          placeholder="Password"
          required
          v-model="credentials.password"
        />
        <button class="btn bg-accent mx-auto w-full shadow-lg">Login</button>

        <p class="text-center">
          Don’t have an account?
          <RouterLink :to="{ name: 'signup' }">make account</RouterLink>
        </p>
      </AuthForm>
    </div>
  </BaseLayout>
</template>
