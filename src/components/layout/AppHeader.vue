<template>
  <header class="relative py-10 lg:flex lg:justify-between lg:items-center">
    <div class="flex justify-between items-center">
      <g-link to="/" class="flex items-center group">
        <AppLogo class="w-12 text-gray-700 group-hover:text-gray-600 transition-all"/>
        <span class="ml-3 text-gray-700 group-hover:text-gray-600 text-4xl font-black transition-all">humand</span>
      </g-link>
      <div class="lg:hidden">
        <button @click="isOpen = !isOpen" type="button" class="hover:text-gray-600 focus:outline-none focus:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10 fill-current">
            <path v-if="!isOpen" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            <path v-if="isOpen" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"></path>
          </svg>
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'absolute' : 'hidden'" class="right-0 mt-3 lg:mt-0 w-64 bg-white shadow-lg z-10 px-6 py-6 border-gray-300 rounded-lg lg:rounded-none border lg:border-0 lg:p-0 lg:flex lg:items-center lg:static lg:w-auto lg:bg-transparent lg:shadow-none lg:z-auto">
      <nav>
        <g-link class="block lg:inline text-xl lg:text-base font-bold text-gray-700 hover:text-gray-500 transition-all" to="/projects/">Discover Projects</g-link>
        <g-link class="block lg:inline mt-3 lg:mt-0 lg:ml-8 text-xl lg:text-base font-bold text-gray-700 hover:text-gray-500 transition-all" to="/about/">How does it work?</g-link>
        <g-link class="block lg:inline mt-3 lg:mt-0 lg:mx-8 text-xl lg:text-base font-bold text-gray-700 hover:text-gray-500 transition-all" to="/raise/">Raise Funds</g-link>
      </nav>
      <AppButton link="#signin" buttonStyle="secondary" buttonText="Login" iconComp="iconUser" class="mt-4 lg:mt-0 justify-center"/>
    </div>
  </header>
</template>

<script>
import AppLogo from '~/components/common/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="postcss">
  .active--exact {
    @apply text-orange-500;
  }

  .active--exact:hover {
    @apply text-orange-500;
  }
</style>