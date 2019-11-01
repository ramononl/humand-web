<template>
  <Layout>

    <div class="relative py-6 lg:pt-20">
      <div class="w-10/12 sm:w-8/12 lg:w-auto mx-auto lg:mx-0 relative">
        <g-image src="~/assets/images/home/home_hero.jpg" width="730" height="600" class="pb-6 sm:pb-10 xl:pb-16 w-full lg:w-1/2 lg:ml-16 xl:ml-32 rounded-lg"/>
        <SwooshShape class="absolute left-0 bottom-0 -ml-4 sm:-ml-8 lg:ml-0 w-7/12 lg:w-5/12 text-orange-500"/>
      </div>
    
      <div class="sm:w-10/12 lg:w-auto sm:mx-auto lg:mx-0 lg:absolute right-0 top-0 mt-16 lg:mt-32 px-8 py-16 bg-green-500 rounded-lg">
        <h1 class="xl:mt-8 text-3xl xl:text-4xl leading-snug font-black text-green-100">Make your choice.<br/>Support meaningful projects.</h1>
        <p class="mt-3 font-black text-green-200">Monthly charity subscription service</p>
        <div class="mt-8 md:flex">
          <AppButton link="/about" buttonText="How does it work?" buttonStyle="primary-light"/>
          <AppButton link="#signup" buttonText="Become a humand" iconComp="iconArrowRight" buttonStyle="primary-light-outline" class="block mt-3 md:mt-0 md:ml-3" @click.native="signupModalOpen = true"/>
        </div>
      </div>
    </div>
    
  </Layout>
</template>

<script>
import SwooshShape from '~/components/common/SwooshShape.vue'

export default {
  metaInfo: {
    title: 'Make your choice.'
  },
  components: {
    SwooshShape
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
