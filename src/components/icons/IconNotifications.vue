<template>
  <g>
    <circle cx="12" cy="19" r="3" class="secondary"></circle>
    <path d="M10.02 4.28L10 4a2 2 0 1 1 3.98.28A7 7 0 0 1 19 11v5a1 1 0 0 0 1 1 1 1 0 0 1 0 2H4a1 1 0 0 1 0-2 1 1 0 0 0 1-1v-5a7 7 0 0 1 5.02-6.72z"></path>
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