<template>
  <div>
    <h2>Project Map (Beta)</h2>
    <p class="mt-1 text-gray-600">Search for projects based on their location on the map below.</p>
    <div class="mt-4 map-responsive">
      <iframe src="https://www.google.com/maps/d/embed?mid=1fZciR5pJM-jf2vytwYvOvd2tyysjsNvx&hl=de" width="640" height="480"></iframe>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.map-responsive{
  overflow:hidden;
  padding-bottom:56.25%;
  position:relative;
  height:0;
}
.map-responsive iframe{
  left:0;
  top:0;
  height:100%;
  width:100%;
  position:absolute;
}
</style>