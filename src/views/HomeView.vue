<script setup lang="ts">
import { onMounted } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useMenu } from '@/composables/menu'
import type { Menu } from '@/types/menu'
import { useAuthStore } from '@/stores/auth'

const { menu, getMenu } = useMenu()

onMounted(async () => {
  const { data } = await getMenu()
  menu.value = data as Menu[]
})

const authStore = useAuthStore()
onMounted(async () => {
  const token = authStore.token.get()
  await authStore.getUser(token)
})
</script>

<template>
  <MainLayout>
    <header class="py-4">
      <h1>Vino Veritas</h1>
      <p>want to drink something? We've got you.</p>
    </header>

    <ul class="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <li class="message" v-if="!menu || !menu.length">No menu found.</li>

      <template v-else>
        <li v-for="menuItem in menu">
          <article class="card bg-neutral-700/20 transition-colors h-full">
            <div class="card-body">
              <h2 class="card-title">{{ menuItem.name }}</h2>
              <p>{{ menuItem.type.type }}</p>

              <span v-for="variant_value in menuItem.variant_values">
                {{ variant_value.option_value.value }} -
                {{ variant_value.price }}
              </span>

              <button class="btn btn-block outline outline-accent">
                Tambah
              </button>
            </div>
          </article>
        </li>
      </template>
    </ul>
  </MainLayout>
</template>
