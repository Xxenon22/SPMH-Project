<script setup lang="ts">
import BaseLayout from '../layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <img src="../assets/fluent_drink-coffee-16-filled.png" alt="" />
    <div class="container">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <span
          ><input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            class="checkbox"
          />
          Remember this account</span
        >
        <button type="button">Login</button>

        <div class="go-SignUp">
          <span>Don’t have an account? <a href="#">make account</a></span>
        </div>
      </form>
    </div>
  </BaseLayout>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

img {
  margin-left: 40%;
  width: 112px;
  border: 1px solid #b88554;
  border-radius: 100px 100px;
  background-color: #b88554;
  padding: 10px 10px;
}

.container {
  background-color: #b88554;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  width: 500px;
  max-width: 100%;
  min-height: 450px;
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

.container button {
  margin-left: 30%;
  background-color: #654326;
  color: #fff;
  font-size: 30px;
  border-radius: 20px;
  width: 150px;
  padding: 5px;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-top: 10px;
}

.container form {
  background-color: #b88554;
  display: flex;
  align-items: cneter;
  justify-content: center;
  flex-direction: column;
  padding: 0 80px;
  height: 100%;
}

.container input {
  background-color: #fff;
  color: #b88554;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 15px;
  border-radius: 15px;
  outline: none;
}

.container button {
  margin-top: 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.35);
}

span input {
  margin: 0;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.35);
}

.form button {
  border-radius: 6px;
  outline: none;
}

.form-container {
  position: absolute;
}

.go-SignUp {
  margin: 30px;
  white-space: noWrap;
}
</style>

