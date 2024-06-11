<script setup lang="ts">
import TextInput from '@/components/TextInput.vue'
import BaseLayout from '../layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <div class="grid grid-cols-1 min-h-screen">
      <form
        class="bg-primary max-w-8xl mx-auto p-8 rounded-lg flex flex-col gap-4 place-self-center relative"
      >
        <figure
          class="bg-primary flex justify-center items-center p-16 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src="../assets/fluent_drink-coffee-16-filled.png"
            class="size-16"
            width="50"
            height="50"
            alt=""
          />
        </figure>
        <h1 class="text-center z-10">Login</h1>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" />
        <button class="btn bg-accent mx-auto w-full shadow-lg">Login</button>

        <div class="go-SignUp">
          <span>Don’t have an account? <a href="#">make account</a></span>
        </div>
      </form>
    </div>
  </BaseLayout>
</template>

<style>
.go-SignUp {
  margin: 30px;
  white-space: noWrap;
}
</style>
