<template>
  <g>
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm13 12a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-6 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2z"></path>
    <rect width="20" height="4" x="2" y="7" class="secondary fill-current"></rect>
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