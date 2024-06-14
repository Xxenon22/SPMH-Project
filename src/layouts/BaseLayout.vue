<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <Navbar />
  <slot />
</template>

<style>
body {
  background-image: url(../assets/background.svg);
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
