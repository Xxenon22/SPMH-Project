<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import AuthForm from '@/components/AuthForm.vue'
import TextInput from '@/components/TextInput.vue'
import { useAuthStore } from '@/stores/auth'
import { computed, ref } from 'vue'

const authStore = useAuthStore()

const credentials = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const isSubmittable = computed(
  () => credentials.value.password === credentials.value.confirmPassword,
)

async function signUp() {
  await authStore.signUp({
    name: credentials.value.name,
    email: credentials.value.email,
    password: credentials.value.password,
  })
}
</script>

<template>
  <BaseLayout>
    <div
      class="grid grid-cols-[1fr_minmax(60ch,1fr)_1fr] items-center min-h-screen"
    >
      <AuthForm @submit.prevent="signUp">
        <h1 class="text-center z-10">Signup</h1>
        <TextInput
          name="name"
          placeholder="your name"
          required
          v-model="credentials.name"
        />
        <TextInput
          name="email"
          type="email"
          placeholder="your email"
          required
          v-model="credentials.email"
        />
        <TextInput
          name="password"
          type="password"
          placeholder="your password"
          required
          v-model="credentials.password"
        />
        <TextInput
          name="confirm-password"
          type="password"
          placeholder="confirm password"
          required
          v-model="credentials.confirmPassword"
        />

        <button class="btn btn-block bg-accent" :disabled="!isSubmittable">
          Sign up
        </button>

        <p class="text-center">
          Already have an account?
          <RouterLink :to="{ name: 'login' }">Log in</RouterLink>
        </p>
      </AuthForm>
    </div>
  </BaseLayout>
</template>
