<template>
  <div class="container mx-auto px-4">
    <AppHeader/>
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
    <footer class="mt-20 text-gray-400">
      <div class="flex flex-col sm:flex-row justify-center">
        <div>
          <span class="block text-center text-gray-400 sm:text-left m-0 font-bold">Texts</span>
          <span class="block text-center text-gray-400 sm:text-left m-0"><a target="_blank" href="https://www.betterplace.org/">betterplace.org</a></span>
          <span class="block text-center text-gray-400 sm:text-left m-0"><a target="_blank" href="https://www.globalgiving.org/">globalgiving.org</a></span>
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-8">
          <span class="block text-center text-gray-400 sm:text-left m-0 font-bold">Images</span>
          <span class="block text-center text-gray-400 sm:text-left m-0"><a target="_blank" href="https://undraw.co/">unsplash.com</a></span>
          <span class="block text-center text-gray-400 sm:text-left m-0"><a target="_blank" href="https://www.pexels.com/">pexels.com</a></span>
          <span class="block text-center text-gray-400 sm:text-left m-0"><a target="_blank" href="https://pixabay.com/">pixabay.com</a></span>
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-8">
          <span class="block text-center text-gray-400 sm:text-left m-0 font-bold">Illustrations</span>
          <span class="block text-center text-gray-400 sm:text-left m-0"><a target="_blank" href="https://undraw.co/">undraw.co</a></span>
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-8">
          <span class="block text-center text-gray-400 sm:text-left m-0 font-bold">About</span>
          <span class="block text-center text-gray-400 sm:text-left m-0">Daniel Bucher</span>
          <span class="block text-center text-gray-400 sm:text-left m-0">Fabrice Göldi</span>
          <span class="block text-center text-gray-400 sm:text-left m-0">Ramon Kratzer</span>
        </div>
      </div>
      <div class="mt-8 flex flex-col justify-center">
        <span class="text-center text-gray-400">Student project | <a href="http://portfolios.htwchur.ch/projects/apieceofpeace/" target="_blank">A piece of peace</a></span>
      </div>
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
