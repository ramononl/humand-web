<template>
  <div class="mt-5 px-2 max-w-80">
    <g-link :to="cardData.path" class="group">
      <g-image :src="cardData.image" :alt="cardData.title" class="rounded-lg shadow-md group-hover:opacity-75 transition-all" style="filter: grayscale(15%) contrast(80%) brightness(100%);"/>
      <div class="relative px-4 -mt-16 transition-all">
        <div class="bg-white rounded-lg px-4 py-4 shadow-lg h-32 flex flex-col justify-between">
          <div>
            <div class="text-xs text-gray-600 font-bold uppercase tracking-wide">{{ cardData.organization }}</div>
            <h4 class="flex items-center text-gray-900 font-bold text-lg leading-snug">{{ cardData.title }}</h4>
          </div>
          <TagContainer>
            <ProjectTag v-for="tag in cardData.tags" :key="tag.id">
              {{ tag }}
            </ProjectTag>
          </TagContainer>
        </div>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["cardData"]
}
</script>

<style>

</style>