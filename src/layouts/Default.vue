<template>
  <div class="container mx-auto px-4">
    <AppHeader/>
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
    <LoginModal name="#signin"/>
    <SignupModal name="#signup"/>
  </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader.vue'
import LoginModal from '~/components/common/LoginModal.vue'
import SignupModal from '~/components/common/SignupModal.vue'

export default {
  components: {
    AppHeader,
    LoginModal,
    SignupModal
  }
}
</script>

<style lang="postcss">
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

p {
  @apply mt-2;
}
</style>
