<script setup lang="ts">
import { useMenu } from '@/composables/menu'
import BaseLayout from '@/layouts/BaseLayout.vue'
import type { Menu } from '@/types/menu'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const { menuItem, getMenuById } = useMenu()
const route = useRoute()

onMounted(async () => {
  const { data } = await getMenuById(route.params.id as string)
  menuItem.value = data as Menu
})
</script>

<template>
  <BaseLayout>
    <div class="message" v-if="!menuItem"></div>

    <main class="p-4" v-else>
      <header>
        <h1>{{ menuItem.name }}</h1>
      </header>

      <ul>
        <li v-for="variantValue in menuItem.variant_values">
          <span> {{ variantValue.option_value.value }} </span> -
          <span> {{ variantValue.price }} </span>
        </li>
      </ul>

      <RouterLink to="" class="p-4 outline outline-solid outline-primary"
        >Buy
      </RouterLink>
    </main>
  </BaseLayout>
</template>
