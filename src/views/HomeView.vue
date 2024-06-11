<script setup lang="ts">
import { onMounted } from 'vue'
import BaseLayout from '../layouts/BaseLayout.vue'
import { useMenu } from '@/composables/menu'
import type { Menu } from '@/types/menu'

const { menu, getMenu } = useMenu()

onMounted(async () => {
  const { data } = await getMenu()
  menu.value = data as Menu[]
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
        <li class="message" v-if="!menu || !menu.length">No menu found.</li>

        <template v-else>
          <li v-for="menuItem in menu">
            <article
              class="card bg-neutral-700/20 hover:bg-neutral-700/40 transition-colors h-full"
            >
              <RouterLink
                :to="{ name: 'menu', params: { id: menuItem.id } }"
                class="card-body"
              >
                <h2 class="card-title">{{ menuItem.name }}</h2>
                <p>{{ menuItem.type.type }}</p>

                <span v-for="variant_value in menuItem.variant_values">
                  {{ variant_value.option_value.value }} -
                  {{ variant_value.price }}
                </span>
              </RouterLink>
            </article>
          </li>
        </template>
      </ul>
    </main>
  </BaseLayout>
</template>
