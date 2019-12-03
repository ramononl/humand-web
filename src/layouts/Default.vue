<template>
  <div class="container mx-auto px-4">
    <AppHeader/>
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
    <footer class="mt-20 text-gray-400">
      <div class="flex justify-center">
        <div>
          <p class="m-0 font-bold">Texts</p>
          <p class="m-0"><a target="_blank" href="https://www.betterplace.org/">betterplace.org</a></p>
          <p class="m-0"><a target="_blank" href="https://www.globalgiving.org/">globalgiving.org</a></p>
        </div>
        <div class="ml-8">
          <p class="m-0 font-bold">Images</p>
          <p class="m-0"><a target="_blank" href="https://undraw.co/">unsplash.com</a></p>
          <p class="m-0"><a target="_blank" href="https://www.pexels.com/">pexels.com</a></p>
          <p class="m-0"><a target="_blank" href="https://pixabay.com/">pixabay.com</a></p>
        </div>
        <div class="ml-8">
          <p class="m-0 font-bold">Illustrations</p>
          <p class="m-0"><a target="_blank" href="https://undraw.co/">undraw.co</a></p>
        </div>
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
