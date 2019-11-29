<template>
  <div class="container mx-auto px-4">
    <AppHeader/>
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
    <AppModal/>
  </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader.vue'
import AppModal from "~/components/common/AppModal.vue";

export default {
  components: {
    AppHeader,
    AppModal
  }
}
</script>

<style lang="postcss">
.fade-enter-active {
  transition: opacity .4s;
}

.fade-enter {
  opacity: 0;
}

h1 {
  @apply text-2xl font-bold text-gray-700;
}

h2 {
  @apply text-2xl font-bold text-gray-700;
}

h2 {
  @apply text-xl font-bold text-gray-700;
}

p {
  @apply mt-2;
}
</style>
