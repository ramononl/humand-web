<template>
  <div>
    <div class="flex items-center">
      <IconBase class="text-gray-500" :iconClasses="['w-10 h-10']"><IconDonations/></IconBase>
      <h2 class="ml-2">Donations</h2>
    </div>
    <p>Make changes to your total donation amount, selected projects and splitting between projects.</p>
    <h3>Total monthly donation</h3>
    <div class="text-lg text-gray-600 font-bold flex w-32 border rounded-lg overflow-hidden">
      <div class="px-3 py-2 border-r">$</div>
      <div>
        <input class="px-3 py-2 text-right w-full h-full font-bold focus:outline-none" type="number" v-model.number="total">
      </div>
    </div>
    <h3>Your projects</h3>
    <div class="bg-gray-200 rounded-lg">
      <div class="px-6 pt-5 pb-4 border-b border-white">
        <div class="flex items-center justify-between">
          <div class="text-lg text-gray-700">One Earth – One Ocean</div>
          <div class="ml-3 px-1 text-xs rounded border border-red-500 tracking-widest font-bold text-red-500 uppercase hover:bg-red-500 hover:text-red-100 cursor-pointer">Stop donation</div>
        </div>
        <div class="mt-2 flex items-center">
          <div class="flex-grow">
            <input type="range" min="0" max="43" v-model.number="sliders[0]" @input="input(0)" step="1">
          </div>
          <div class="flex items-center px-1 py-2 w-16 ml-6 font-bold text-gray-600">
            <div>$</div>
            <span class="text-right w-full h-full font-bold bg-transparent focus:outline-none">{{ sliders[0] }}</span>
          </div>
        </div>
      </div>
      <div class="px-6 pt-5 pb-4 border-b border-white">
        <div class="flex items-center justify-between">
          <div class="text-lg text-gray-700">One Earth – One Ocean</div>
          <div class="ml-3 px-1 text-xs rounded border border-red-500 tracking-widest font-bold text-red-500 uppercase hover:bg-red-500 hover:text-red-100 cursor-pointer">Stop donation</div>
        </div>
        <div class="mt-2 flex items-center">
          <div class="flex-grow">
            <input type="range" min="0" max="43" v-model.number="sliders[1]" @input="input(1)" step="1">
          </div>
          <div class="flex items-center px-1 py-2 w-16 ml-6 font-bold text-gray-600">
            <div>$</div>
            <span class="text-right w-full h-full font-bold bg-transparent focus:outline-none">{{ sliders[1] }}</span>
          </div>
        </div>
      </div>
      <div class="px-6 pt-5 pb-4 border-b border-white">
        <div class="flex items-center justify-between">
          <div class="text-lg text-gray-700">One Earth – One Ocean</div>
          <div class="ml-3 px-1 text-xs rounded border border-red-500 tracking-widest font-bold text-red-500 uppercase hover:bg-red-500 hover:text-red-100 cursor-pointer">Stop donation</div>
        </div>
        <div class="mt-2 flex items-center">
          <div class="flex-grow">
            <input type="range" min="0" max="43" v-model.number="sliders[2]" @input="input(2)" step="1">
          </div>
          <div class="flex items-center px-1 py-2 w-16 ml-6 font-bold text-gray-600">
            <div>$</div>
            <span class="text-right w-full h-full font-bold bg-transparent focus:outline-none">{{ sliders[2] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 43,
      sliders: [5,25,13]
    }
  },
  methods: {
    input(n){
      const sum = this.sliders.reduce((sum, val) => sum + val, 0)
      const diff = sum - this.total
      let remainder = 0
      for(let i in this.sliders){
      	if(i != n){ //don't modify the slider which is being dragged
          let val = this.sliders[i] - diff / (this.sliders.length - 1)
          if(val < 0){
            remainder += val
            val = 0
          }
          this.$set(this.sliders, i, val)
        }
      }
      if(remainder){
        const filteredLength = this.sliders.filter((val, key) => val > 0 && key != n).length
        for(let i in this.sliders){
          if(i != n && this.sliders[i] > 0){
            this.$set(this.sliders, i, this.sliders[i] + remainder / filteredLength)
          }
        }
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
input[type=range] {
  -webkit-appearance: none;
  @apply my-2 w-full;
}
input[type=range]:focus {
  @apply outline-none;
}
input[type=range]::-webkit-slider-runnable-track {
  animate: 0.2s;
  @apply w-full cursor-pointer h-2 bg-gray-400 rounded-full;
}
input[type=range]::-webkit-slider-thumb {
  @apply -mt-2 cursor-pointer bg-gray-700 w-6 h-6 rounded-full;
  -webkit-appearance: none;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  @apply bg-gray-400;
}
input[type=range]::-moz-range-track {
  animate: 0.2s;
  @apply w-full cursor-pointer h-2 bg-gray-400 rounded-full;
}
input[type=range]::-moz-range-thumb {
  @apply -mt-2 cursor-pointer bg-gray-700 w-6 h-6 rounded-full;
}
input[type=range]::-ms-track {
  animate: 0.2s;
  @apply w-full cursor-pointer h-2 bg-transparent border-transparent text-transparent rounded-full;
  border-width: 1rem 0;
}
input[type=range]::-ms-fill-lower {
  @apply bg-gray-400 rounded-full;
}
input[type=range]::-ms-fill-upper {
  @apply bg-gray-400 rounded-full;
}
input[type=range]::-ms-thumb {
  @apply cursor-pointer bg-gray-700 w-6 h-6 rounded-full;
}
input[type=range]:focus::-ms-fill-lower {
  @apply bg-gray-400;
}
input[type=range]:focus::-ms-fill-upper {
  @apply bg-gray-400;
}
</style>