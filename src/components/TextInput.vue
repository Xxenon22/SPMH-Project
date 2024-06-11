<script setup lang="ts">
const model = defineModel()
</script>
<template>
  <input
    type="text"
    v-model="model"
    class="input input-bordered block w-full"
  />
</template>
