<template>
  <div>
    <h2>Donations of Allison Morrison</h2>
    <p>Changes to your total donation amount, selected projects and splitting between projects get updated for the following month.</p>
    <h3>Total monthly donation</h3>
    <div class="text-lg text-gray-600 font-bold flex w-32 border rounded-lg overflow-hidden">
      <div class="px-3 py-2 border-r">$</div>
      <div>
        <input class="px-3 py-2 text-right w-full h-full font-bold focus:outline-none" type="number" value="43">
      </div>
    </div>
    <h3>Your projects</h3>
    <div class="bg-gray-200 rounded-lg">
      <div class="px-6 py-5 border-b border-white">
        <div class="flex items-center">
          <div class="text-lg text-gray-700">One Earth – One Ocean</div>
          <div class="ml-3 px-1 text-xs rounded border border-gray-500 tracking-widest font-bold text-gray-500 uppercase">Donated: $ 84</div>
          <div class="ml-3 px-1 text-xs rounded border border-red-500 tracking-widest font-bold text-red-500 uppercase">Stop donation</div>
        </div>
        <div class="flex items-center">
          <div class="flex-grow">
            <input type="range" min="0" max="100">
          </div>
          <div class="ml-6">Amount</div>
        </div>
      </div>
      <div class="px-6 py-5 border-b border-white">
        <div class="flex items-center">
          <div class="text-lg text-gray-700">One Earth – One Ocean</div>
          <div class="ml-3 px-1 text-xs rounded border border-gray-500 tracking-widest font-bold text-gray-500 uppercase">Donated: $ 84</div>
          <div class="ml-3 px-1 text-xs rounded border border-red-500 tracking-widest font-bold text-red-500 uppercase">Stop donation</div>
        </div>
        <div class="flex items-center">
          <div class="flex-grow">
            <input type="range" min="0" max="100">
          </div>
          <div class="ml-6">Amount</div>
        </div>
      </div>
      <div class="px-6 py-5 border-b border-white">
        <div class="flex items-center">
          <div class="text-lg text-gray-700">One Earth – One Ocean</div>
          <div class="ml-3 px-1 text-xs rounded border border-gray-500 tracking-widest font-bold text-gray-500 uppercase">Donated: $ 84</div>
          <div class="ml-3 px-1 text-xs rounded border border-red-500 tracking-widest font-bold text-red-500 uppercase">Stop donation</div>
        </div>
        <div class="flex items-center">
          <div class="flex-grow">
            <input type="range" min="0" max="100">
          </div>
          <div class="ml-6">Amount</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type=range] {
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -14px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type=range]:focus::-ms-fill-upper {
  background: #367ebd;
}
</style>