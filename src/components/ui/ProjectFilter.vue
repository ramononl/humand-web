<template>
  <div class="xl:flex justify-between">
    <div class="xl:w-176 flex flex-col md:flex-row md:border border-gray-500 rounded-lg">
      <div class="px-4 flex-1 border rounded-lg md:rounded-none md:border-t-0 md:border-b-0 md:border-l-0 md:border-r border-gray-500 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 text-green-500 fill-current">
          <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
        </svg>
        <input class="bg-transparent text-sm text-gray-500 font-bold focus:outline-none pl-2 py-2 block w-full appearance-none leading-normal" type="search" placeholder="Search projects...">
      </div>
      <div class="mt-2 md:mt-0 inline-block relative flex-1 border rounded-lg border-gray-500 md:border-0">
        <select class="bg-transparent block appearance-none focus:outline-none w-full px-5 py-2 pr-8 text-sm text-gray-500 font-bold">
          <option selected>All categories</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 fill-current">
            <path d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path>
          </svg>
        </div>
      </div>
      <div class="mt-2 md:mt-0 inline-block relative flex-1 border rounded-lg md:rounded-none md:border-l md:border-t-0 md:border-r-0 md:border-b-0 border-gray-500">
        <select class="bg-transparent block appearance-none focus:outline-none w-full px-5 py-2 pr-8 text-sm text-gray-500 font-bold">
          <option selected>All regions</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 fill-current">
            <path d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="mt-4 xl:mt-0 inline-flex border border-gray-500 rounded-lg overflow-hidden">
      <div class="self-center px-5 py-2 text-green-500 font-bold text-sm">View</div>
      <button
        @click="changeView('category')"
        :class="projectView === 'category' ? 'bg-green-500 text-green-100' : ''"
        class="px-5 py-2 text-sm text-gray-500 font-bold border-l border-r border-gray-500 focus:outline-none transition-all"
      >Category</button>
      <button
        @click="changeView('map')"
        :class="projectView === 'map' ? 'bg-green-500 text-green-100' : ''"
        class="px-5 py-2 text-sm text-gray-500 font-bold border-r border-gray-500 focus:outline-none transition-all"
      >Map</button>
      <button
        @click="changeView('popular')"
        :class="projectView === 'popular' ? 'bg-green-500 text-green-100' : ''"
        class="px-5 py-2 text-sm text-gray-500 font-bold focus:outline-none transition-all"
      >Popular</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectView: "category"
    };
  },
  methods: {
    changeView(selectedView) {
      this.projectView = selectedView;
      this.$emit("setParentProjectView", this.projectView);
    }
  }
};
</script>

<style>
</style>