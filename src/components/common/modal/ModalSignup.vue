<template>
  <ModalTemplate>
    <template #modal-header>Create your humand account</template>
    <template #modal-body>
      <div>
        <input class="bg-transparent text-gray-600 border border-gray-500 rounded-lg focus:outline-none pl-2 py-2 block w-full appearance-none leading-normal" type="email" placeholder="Email">
      </div>
      <div class="mt-4">
        <input class="bg-transparent text-gray-600 border border-gray-500 rounded-lg focus:outline-none pl-2 py-2 block w-full appearance-none leading-normal" type="text" placeholder="Full name">
      </div>
      <div class="mt-4">
        <input class="bg-transparent text-gray-600 border border-gray-500 rounded-lg focus:outline-none pl-2 py-2 block w-full appearance-none leading-normal" type="password" placeholder="Password">
      </div>
      <div class="mt-4">
        <input class="bg-transparent text-gray-600 border border-gray-500 rounded-lg focus:outline-none pl-2 py-2 block w-full appearance-none leading-normal" type="password" placeholder="Confirm password">
      </div>
      <div class="mt-4">
        <AppButton buttonStyle="primary" buttonText="Sign in" class="inline-block w-full text-center"/>
      </div>
      <div class="mt-4">
        <p class="text-sm text-center">Already have an account? <button @click="showModal('ModalLogin')" class="underline font-bold">Sign in</button>.</p>
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
      "hideModal"
    ]),
  },
};
</script>