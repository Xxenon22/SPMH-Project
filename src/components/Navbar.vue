<template>
  <nav class="bg-primary p-4">
    <ul class="flex gap-2">
      <li>
        <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'about' }" class="nav-link">About</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'orders' }" class="nav-link">
          Orders
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'account' }" class="nav-link"
          >Account</RouterLink
        >
      </li>
      <li>
        <RouterLink :to="{ name: 'login' }" class="p-4">Login</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
