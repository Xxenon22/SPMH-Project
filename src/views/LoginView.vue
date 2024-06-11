<script setup lang="ts">
import TextInput from '@/components/TextInput.vue'
import BaseLayout from '../layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <div class="grid">
      <img src="../assets/fluent_drink-coffee-16-filled.png" alt="" />

      <form
        class="bg-primary max-w-8xl mx-auto p-8 rounded-lg flex flex-col gap-4"
      >
        <h1 class="text-center">Login</h1>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" />
        <span
          ><input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            class="checkbox"
          />
          Remember this account</span
        >
        <button class="btn bg-accent mx-auto">Login</button>

        <div class="go-SignUp">
          <span>Don’t have an account? <a href="#">make account</a></span>
        </div>
      </form>
    </div>
  </BaseLayout>
</template>

<style>
img {
  margin-left: 40%;
  width: 112px;
  border: 1px solid #b88554;
  border-radius: 100px 100px;
  background-color: #b88554;
  padding: 10px 10px;
}

.container {
  border-radius: 20px;
}

.container h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-family: 'Jacques Francois';
  border: 1px solid #b88554;
  color: #fff;
}

.container span {
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
}

.container a {
  font-size: 20px;
}

form button {
  margin-left: 30%;
  background-color: #654326;
  color: #fff;
  font-size: 30px;
  border-radius: 20px;
  width: 150px;
  padding: 5px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.container button {
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.35);
}

span input {
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.35);
}

.form-container {
  position: absolute;
}

.go-SignUp {
  margin: 30px;
  white-space: noWrap;
}
</style>

