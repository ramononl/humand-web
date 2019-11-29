<template>
  <div>
    <div class="bg-white shadow-lg rounded-lg overflow-y-auto">
      <div class="bg-orange-500 px-2 py-6">
        <h2 class="text-2xl font-bold text-orange-100 text-center"><slot name="modal-header"/></h2>
      </div>
      <div class="px-20 py-10">
        <slot name="modal-body"/>
      </div>
    </div>
    <div class="mt-4 pb-5">
      <p class="text-sm text-white text-center"><slot name="modal-footer"/></p>
    </div>
  </div>
</template>