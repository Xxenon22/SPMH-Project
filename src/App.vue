<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'

const authStore = useAuthStore()

onMounted(async () => {
  if (authStore.token.value) {
    await authStore.getUser()
  }
})
</script>

<template>
  <RouterView />
</template>
