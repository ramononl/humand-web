<template>
  <div class="mt-5 px-2 flex-none max-w-80">
    <g-link :to="cardData.path" class="group">
      <g-image :src="cardData.image" :alt="cardData.title" class="rounded-lg shadow-md group-hover:opacity-75 transition-all"/>
      <div class="relative px-4 -mt-16 transition-all">
        <div class="bg-white rounded-lg px-4 py-4 shadow-lg">
          <div class="text-xs text-gray-600 font-bold uppercase tracking-wide">{{ cardData.organization }}</div>
          <h4 class="text-gray-900 font-bold text-lg">{{ cardData.title }}</h4>
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