<script setup lang="ts">
import TextInput from '@/components/TextInput.vue'
import BaseLayout from '../layouts/BaseLayout.vue'
import { useAuthStore } from '@/stores/auth'
import { reactive } from 'vue'

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
      <form
        class="bg-primary p-8 rounded-lg flex flex-col gap-4 col-start-2 relative"
        @submit.prevent="logIn"
      >
        <figure
          class="bg-primary flex justify-center items-center p-16 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src="../assets/fluent_drink-coffee-16-filled.png"
            class="size-16"
            width="50"
            height="50"
            alt=""
          />
        </figure>
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

        <div class="go-SignUp">
          <span
            >Don’t have an account?
            <RouterLink :to="{ name: 'signup' }">make account</RouterLink></span
          >
        </div>
      </form>
    </div>
  </BaseLayout>
</template>
