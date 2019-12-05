<template>
  <header class="py-10 flex justify-between items-center">
    <div class="flex justify-between items-center">
      <g-link to="/" class="flex items-center group">
        <AppLogo class="w-16 sm:w-12 text-gray-700 group-hover:text-gray-600 transition-all"/>
        <span class="ml-3 hidden sm:inline-block text-gray-700 group-hover:text-gray-600 text-4xl font-black transition-all">humand</span>
      </g-link>
    </div>
    <div class="flex flex-row-reverse lg:flex-row items-center">
      <div class="relative">
        <div class="ml-6 lg:ml-0 lg:hidden">
          <button @click="menuOpen = !menuOpen" type="button" class="block hover:text-gray-600 focus:outline-none focus:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10 fill-current">
              <path v-if="!menuOpen" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              <path v-if="menuOpen" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"></path>
            </svg>
          </button>
        </div>
        <div :class="menuOpen ? 'block' : 'hidden lg:block'">
          <button @click="menuOpen = false" type="button" class="z-10 block fixed lg:hidden inset-0 w-full h-full cursor-default"></button>
          <div class="absolute right-0 mt-3 lg:mt-0 w-64 bg-white shadow-lg z-10 px-6 py-6 border-gray-300 rounded-lg lg:rounded-none border lg:border-0 lg:p-0 lg:flex lg:items-center lg:static lg:w-auto lg:bg-transparent lg:shadow-none lg:z-auto">
            <nav>
              <g-link class="block lg:inline text-xl lg:text-base font-bold text-gray-700 hover:text-gray-500 transition-all" to="/projects/">Discover Projects</g-link>
              <g-link class="block lg:inline mt-3 lg:mt-0 lg:ml-8 text-xl lg:text-base font-bold text-gray-700 hover:text-gray-500 transition-all" to="/about/">How does it work?</g-link>
              <g-link class="block lg:inline mt-3 lg:mt-0 lg:mx-8 text-xl lg:text-base font-bold text-gray-700 hover:text-gray-500 transition-all" to="/raise/">Raise Funds</g-link>
            </nav>
          </div>
        </div>
      </div>
      <AppButton v-show="!this.$store.state.loggedIn" @click.native="showModal('ModalLogin')" buttonStyle="secondary" buttonText="Login" iconComp="iconUser"/>
      <div v-show="this.$store.state.loggedIn" class="relative">
        <button @click="profileMenuOpen = !profileMenuOpen" type="button" class="block focus:outline-none">
          <g-image class="w-12 rounded-full border-2 border-orange-500" src="~/assets/images/profile.jpeg"/>
        </button>
        <div :class="profileMenuOpen ? 'block' : 'hidden'">
          <button @click="profileMenuOpen = false" type="button" class="z-10 block fixed inset-0 w-full h-full cursor-default"></button>
          <div class="absolute right-0 mt-3 w-48 bg-white shadow-lg z-10 border-gray-300 rounded-lg border">
            <div class="p-6 border-b">
              <g-link class="block text-xl lg:text-base font-bold text-gray-700 hover:text-gray-500 transition-all" to="/settings/#inbox">Project updates</g-link>
              <g-link class="block mt-3 text-xl lg:text-base font-bold text-gray-700 hover:text-gray-500 transition-all" to="/settings/#donations">Donations</g-link>
              <g-link class="block mt-3 text-xl lg:text-base font-bold text-gray-700 hover:text-gray-500 transition-all" to="/settings/#analytics">Engagements</g-link>
              <g-link class="block mt-3 text-xl lg:text-base font-bold text-gray-700 hover:text-gray-500 transition-all" to="/settings/#settings">Settings</g-link>
            </div>
            <div class="p-6">
              <AppButton @click.native="logout" buttonStyle="secondary" buttonText="Logout" iconComp="iconLogout" class="w-full justify-center"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";
import AppLogo from "~/components/common/AppLogo.vue"

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      menuOpen: false,
      profileMenuOpen: false
    }
  },
  methods: {
    ...mapMutations([
      "showModal",
      "userLogout"
    ]),
    logout() {
      this.userLogout();
    }
  },
}
</script>

<style lang="postcss" scoped>
  >>> nav .active--exact {
    @apply text-orange-500;
  }

  >>> nav .active--exact:hover {
    @apply text-orange-500;
  }
</style>