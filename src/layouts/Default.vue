<template>
  <div class="container mx-auto px-4">
    <AppHeader/>
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
    <footer class="mt-20 text-gray-400">
      <p class="text-center">Illustrations: <a target="_blank" href="https://undraw.co/">undraw.co</a> | Images: <a target="_blank" href="https://unsplash.com/">unsplash.com</a> | Copytext: <a target="_blank" href="https://www.betterplace.org/">betterplace.org</a></p>
    </footer>
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
