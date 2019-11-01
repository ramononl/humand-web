<template>
  <div :id="name" :class="[showModal ? 'visible opacity-100' : 'invisible opacity-0']" class="fixed overflow-y-auto inset-0 flex justify-center bg-semi-75 transition-all">
    <a href="#" class="absolute w-full h-full cursor-default"></a>
    <div class="mt-20 relative w-112 max-w-full self-start">
      <div class="flex justify-end">
        <a href="#">
          <IconBase class="text-white" :iconClasses="['w-12 h-12']"><IconClose/></IconBase>
        </a>
      </div>
      <div class="bg-white shadow-lg rounded-lg overflow-y-auto">
        <div class="bg-orange-500 px-2 py-6">
          <h2 class="text-2xl font-bold text-orange-100 text-center"><slot name="modal-header"></slot></h2>
        </div>
        <div class="px-20 py-10">
          <slot name="modal-body"></slot>
        </div>
      </div>
      <div class="mt-4 pb-5">
        <p class="text-sm text-white text-center"><slot name="modal-footer"></slot></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name'],
  computed: {
    showModal() {
      if (this.$route.hash === this.name) {
        return true
      }
    }
  },
  watch: {
    showModal(value) {
      if (value) {
        return document.querySelector('body').classList.add('overflow-hidden');
      }
      document.querySelector('body').classList.remove('overflow-hidden');
    }
  },
}
</script>

<style>

</style>
