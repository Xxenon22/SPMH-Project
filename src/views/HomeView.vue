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
    <h1>Vino Veritas</h1>
    <p>want to drink something? We've got you.</p>

    <ul class="flex flex-col gap-4">
      <li v-for="menuItem in menu">
        <article class="p-4 dark:bg-slate-700">
          <p>{{ menuItem.name }} - {{ menuItem.type.type }}</p>

          <span v-for="variant_value in menuItem.variant_values" class="px-2">
            {{ variant_value.option_value.value }} - {{ variant_value.price }}
          </span>
        </article>
      </li>
    </ul>
  </BaseLayout>
</template>
