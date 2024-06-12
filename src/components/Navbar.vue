<script setup lang="ts">
import logo from '@/assets/fluent_drink-coffee-16-filled.png'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

const isOpen = ref(false)
const authStore = useAuthStore()
</script>

<template>
  <nav class="navbar bg-primary relative z-10">
    <section class="navbar-start">
      <img :src="logo" width="50" alt="" />
    </section>

    <section class="navbar-end">
      <button
        class="btn btn-square btn-ghost md:hidden"
        @click="isOpen = !isOpen"
      >
        <!-- TODO: replace with icon -->
        {{ isOpen }}
      </button>

      <ul
        class="transition-transform duration-300 bg-accent menu items-stretch absolute top-0 left-0 right-0 -translate-y-full md:flex md:menu-horizontal md:relative md:translate-y-0 md:bg-transparent"
        :class="{ 'translate-y-0': isOpen }"
      >
        <li>
          <button class="btn btn-ghost md:hidden" @click="isOpen = false">
            Close
          </button>
        </li>
        <li>
          <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'about' }" class="nav-link"
            >About</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'orders' }" class="nav-link">
            Orders
          </RouterLink>
        </li>
        <li v-if="authStore.user">
          <RouterLink :to="{ name: 'account' }" class="nav-link">
            Account
          </RouterLink>
        </li>
        <li v-else>
          <RouterLink :to="{ name: 'login' }" class="nav-link"
            >Login</RouterLink
          >
        </li>
      </ul>
    </section>
  </nav>
</template>
