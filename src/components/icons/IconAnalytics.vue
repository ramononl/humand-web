<template>
  <g>
    <path d="M3.7 20.7a1 1 0 1 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0l3.3 3.29 4.3-4.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0L9 15.4l-5.3 5.3z"></path>
    <path class="secondary fill-current" d="M16.59 8l-2.3-2.3A1 1 0 0 1 15 4h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1.7.7L18 9.42l-4.3 4.3a1 1 0 0 1-1.4 0L9 10.4l-5.3 5.3a1 1 0 1 1-1.4-1.42l6-6a1 1 0 0 1 1.4 0l3.3 3.3L16.59 8z"></path>
  </g>
</template>

<style lang="postcss" scoped>
  .secondary {
    @apply text-gray-700
  }

  .active .secondary {
    @apply text-green-900;
  }
</style>