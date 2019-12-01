<template>
  <g>
    <rect width="20" height="12" x="2" y="10" rx="2"></rect>
    <path class="secondary fill-current" d="M20 8H4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2zm-2-4H6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"></path>
  </g>
</template>

<style lang="postcss" scoped>
  .secondary {
    @apply text-gray-600;
  }
  
  .active .secondary {
    @apply text-green-300;
  }
</style>