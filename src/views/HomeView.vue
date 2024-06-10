<script setup lang="ts">
import { onMounted } from 'vue'
import BaseLayout from '../layouts/BaseLayout.vue'
import { useMenu } from '@/composables/menu'

const { menu, getMenu } = useMenu()

onMounted(async () => {
  const { count, data } = await getMenu()
  menu.value = data
})
</script>

<template>
  <BaseLayout>
    <main class="mx-auto max-w-7xl p-4">
      <header class="py-4">
        <h1>Vino Veritas</h1>
        <p>want to drink something? We've got you.</p>
      </header>

      <ul class="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <li v-for="menuItem in menu">
          <article class="p-4 dark:bg-gray-700/75 rounded-lg">
            <h2 class="text-lg">{{ menuItem.name }}</h2>
            <p>{{ menuItem.type.type }}</p>

            <span v-for="variant_value in menuItem.variant_values" class="px-2">
              {{ variant_value.option_value.value }} - {{ variant_value.price }}
            </span>
          </article>
        </li>
      </ul>
    </main>
  </BaseLayout>
</template>
