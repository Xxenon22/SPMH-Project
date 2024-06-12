<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import AuthForm from '@/components/AuthForm.vue'
import TextInput from '@/components/TextInput.vue'

function signUp() {
  console.log('signing up...')
}
</script>

<template>
  <BaseLayout>
    <div
      class="grid grid-cols-[1fr_minmax(60ch,1fr)_1fr] items-center min-h-screen"
    >
      <AuthForm @submit.prevent="signUp">
        <h1 class="text-center z-10">Signup</h1>
        <TextInput name="name" placeholder="your name" />
        <TextInput name="email" type="email" placeholder="your email" />
        <TextInput
          name="password"
          type="password"
          placeholder="your password"
        />
        <TextInput
          name="confirm-password"
          type="password"
          placeholder="confirm password"
        />

        <button class="btn btn-block bg-accent">Sign up</button>

        <p class="text-center">
          Already have an account?
          <RouterLink :to="{ name: 'login' }">Log in</RouterLink>
        </p>
      </AuthForm>
    </div>
  </BaseLayout>
</template>
