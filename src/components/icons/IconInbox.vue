<template>
  <g>
    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v10h2a2 2 0 0 1 2 2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h2V5H5z"></path>
    <path class="secondary fill-current" d="M8 7h8a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zm0 4h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2z"></path>
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