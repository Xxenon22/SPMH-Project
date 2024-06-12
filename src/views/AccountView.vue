<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import BaseLayout from '../layouts/BaseLayout.vue'

const authStore = useAuthStore()
</script>

<template>
  <BaseLayout>
    <h1>{{ authStore.user.name }}</h1>
    <p>{{ authStore.user.email }}</p>
  </BaseLayout>
</template>
