<template>
  <g>
    <circle cx="12" cy="12" r="10"></circle>
    <path class="secondary fill-current" d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"></path>
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