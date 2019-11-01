<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="iconClasses"  
    viewBox="0 0 24 24"
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconClasses: {
      type: Array,
      default: () => ['w-8 h-8']
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>