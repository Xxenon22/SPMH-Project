<template>
  <nav class="p-4">
    <ul class="flex gap-2">
      <li>
        <RouterLink :to="{ name: 'home' }" class="p-4">Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'about' }" class="p-4">About</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'orders' }" class="p-4">Orders</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'account' }" class="p-4">Account</RouterLink>
      </li>
    </ul>
  </nav>
</template>
