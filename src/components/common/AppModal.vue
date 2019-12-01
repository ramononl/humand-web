<template>
  <ClientOnly>
    <transition name="fade">
      <div v-if="visible" class="fixed overflow-y-auto inset-0 flex justify-center bg-semi-75 z-50">
        <button @click="hideModal" class="absolute w-full h-full cursor-default"></button>
        <div class="mt-20 p-4 relative w-112 max-w-full self-start">
          <div class="flex justify-end">
            <button @click="hideModal" class="focus:outline-none">
              <IconBase class="text-white" :iconClasses="['w-12 h-12']"><IconClose/></IconBase>
            </button>
          </div>
          <component :is="component"></component>
        </div>
      </div>
    </transition>
  </ClientOnly>
</template>

<script>
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import ModalLogin from "./modal/ModalLogin.vue"
import ModalSignup from "./modal/ModalSignup.vue"

export default {
  name: 'AppModal',
  components: { ModalLogin, ModalSignup },
  data() {
    return {
      component: null,
    };
  },
  computed: {
    ...mapState({
      visible: 'modalVisible',
      modalComponent: 'modalComponent',
    })
  },
  created() {
    const escapeHandler = (e) => {
      if (e.key === `Escape` && this.visible) {
        this.hideModal();
      }
    };
    window.addEventListener(`keydown`, escapeHandler);
    this.$once(`hook:destroyed`, () => {
      window.removeEventListener(`keydown`, escapeHandler);
    });
  },
  methods: {
    ...mapMutations(['hideModal']),
  },
  watch: {
    modalComponent(componentName) {
      if (!componentName) return;
      this.component = componentName;
    }
  }
};
</script>

<style>

</style>
