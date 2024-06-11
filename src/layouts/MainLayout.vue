<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <main class="max-w-7xl mx-auto p-4">
      <slot />
    </main>
  </BaseLayout>
</template>
