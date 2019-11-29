<template>
  <component :is="type" :to="to" :class="[buttonStyle, iconComp ? 'inline-flex items-center' : 'inline-block']" class="px-4 py-2 rounded-lg border-2 font-bold tracking-widest uppercase focus:outline-none transition-all">
    {{ buttonText }}
    <IconBase v-if="iconComp" :iconClasses="['w-5 h-5']" class="ml-2 flex-shrink-0"><component :is="iconComp"/></IconBase>
  </component>
</template>

<script>
export default {
  props: ["to", "buttonText", "buttonStyle", "iconComp"],
  computed: {
    type() {
      if (this.to) {
        return "g-link"
      } else {
        return "button";
      }
    }
  }
}
</script>

<style scoped lang="postcss">
  .primary {
    @apply bg-green-500 border-green-500 text-green-100;
  }

  .primary:hover {
    @apply bg-green-300 border-green-300 text-green-600;
  }

  .primary-outline {
    @apply bg-transparent border-green-100 text-green-100;
  }

  .primary-outline:hover {
    @apply bg-transparent border-green-200 text-green-200;
  }

  .primary-light {
    @apply bg-green-100 border-green-100 text-green-500;
  }

  .primary-light:hover {
    @apply bg-green-200 border-green-200 text-green-700;
  }

  .primary-light-outline {
    @apply bg-transparent border-green-100 text-green-100;
  }

  .primary-light-outline:hover {
    @apply bg-transparent border-green-200 text-green-200;
  }

  .secondary {
    @apply bg-orange-500 border-orange-500 text-orange-100;
  }

  .secondary:hover {
    @apply bg-orange-300 border-orange-300 text-orange-600;
  }

  .secondary-outline {
    @apply bg-transparent border-orange-100 text-orange-100;
  }

  .secondary-outline:hover {
    @apply bg-transparent border-orange-200 text-orange-200;
  }

  .secondary-light {
    @apply bg-transparent border-orange-100 text-orange-100;
  }

  .secondary-light:hover {
    @apply bg-transparent border-orange-200 text-orange-200;
  }

  .secondary-light-outline {
    @apply bg-transparent border-orange-100 text-orange-100;
  }

  .secondary-light-outline:hover {
    @apply bg-transparent border-orange-200 text-orange-200;
  }
</style>