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
  console.log('logging in...')
  const result = await authStore.logIn(credentials)

  if (result) {
    document.cookie = `vino-access-token=${result.token}`
  }
}
</script>

<template>
  <BaseLayout>
    <div class="grid grid-cols-1 min-h-screen">
      <form
        class="bg-primary max-w-8xl mx-auto p-8 rounded-lg flex flex-col gap-4 place-self-center relative"
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
          <span>Don’t have an account? <a href="#">make account</a></span>
        </div>
      </form>
    </div>
  </BaseLayout>
</template>

<style>
.go-SignUp {
  margin: 30px;
  white-space: noWrap;
}
</style>
