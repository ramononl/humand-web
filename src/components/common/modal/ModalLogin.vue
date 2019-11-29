<template>
  <ModalTemplate>
    <template #modal-header>Welcome back</template>
    <template #modal-body>
      <div>
        <input class="bg-transparent text-gray-900 placeholder-gray-600 border border-gray-500 rounded-lg focus:outline-none pl-2 py-2 block w-full appearance-none leading-normal" type="email" placeholder="Email" :value="$store.state.appUser.email">
      </div>
      <div class="mt-4">
        <input class="bg-transparent text-gray-900 placeholder-gray-600 border border-gray-500 rounded-lg focus:outline-none pl-2 py-2 block w-full appearance-none leading-normal" type="password" placeholder="Password" :value="$store.state.appUser.password">
      </div>
      <div class="mt-4">
        <AppButton @click.native="login" buttonStyle="primary" buttonText="Sign in" class="inline-block w-full text-center"/>
      </div>
      <div class="mt-4">
        <p class="text-sm text-center">Don't have an account? <button @click="showModal('ModalSignup')" class="underline font-bold">Sign up</button>.</p>
      </div>
    </template>
    <template #modal-footer>
      <span>Would you like to rais funds?<br/>Create an&nbsp;</span>
      <button v-if="$route.path === '/raise/'" @click="hideModal" class="underline font-bold">Organization account</button>
      <g-link v-else class="underline font-bold" to="/raise/">Organization account</g-link>.
    </template>
  </ModalTemplate>
</template>

<script>
import { mapMutations } from "vuex";
import ModalTemplate from "./ModalTemplate"

export default {
  name: 'ModalLogin',
  components: {ModalTemplate},
  methods: {
    ...mapMutations([
      "showModal",
      "hideModal",
      "userLogin"
    ]),
    login() {
      this.hideModal();
      this.userLogin();
    }
  },
};
</script>