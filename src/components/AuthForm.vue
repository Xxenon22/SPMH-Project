<template>
  <form
    class="bg-primary px-8 py-6 rounded-lg flex flex-col gap-4 col-start-2 relative"
  >
    <figure
      class="bg-primary flex justify-center items-center p-16 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <img
        src="../assets/fluent_drink-coffee-16-filled.png"
        class="size-16 -translate-y-1/4"
        width="50"
        height="50"
        alt=""
      />
    </figure>
    <slot />
  </form>
</template>
