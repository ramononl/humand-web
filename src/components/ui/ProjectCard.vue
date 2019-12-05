<template>
  <div class="mt-5 px-2 max-w-80">
    <div class="rounded-lg shadow-md overflow-hidden h-full">
      <g-link :to="cardData.path" class="group">
        <div class="relative">
          <g-image :src="cardData.image" :alt="cardData.title" class="group-hover:opacity-75 transition-all" style="filter: grayscale(15%) contrast(80%) brightness(100%);"/>
          <div class="absolute left-0 bottom-0 ml-6 mb-3 bg-white rounded-full px-2 py-1 opacity-75">
            <div class="text-xs text-gray-600 font-bold uppercase tracking-wide flex items-center">
              <IconBase class="text-gray-500" :iconClasses="['w-4 h-4']"><IconLocation/></IconBase>
              <div class="ml-1">{{ cardData.region[0] }}</div>
            </div>
          </div>
        </div>
        <div class="relative transition-all">
          <div class="bg-white px-6 py-5 flex flex-col justify-between">
            <div>
              <div class="text-xs text-gray-600 font-bold uppercase tracking-wide">{{ cardData.organization }}</div>
              <h4 class="flex items-center text-gray-900 font-bold text-lg leading-snug">{{ cardData.title }}</h4>
            </div>
          </div>
        </div>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardData"]
}
</script>

<style>

</style>