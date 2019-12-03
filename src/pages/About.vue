<template>
  <Layout>
    <ContainerConstrained>
      <h1>How does humand work?</h1>
      <p class="mt-0 text-gray-600">Sign up, choose your projects and start your monthly support – easy as that.</p>
      
      <div class="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="px-6 py-3 bg-green-500">
          <h2 class="uppercase tracking-wider text-green-100">Create your account</h2>
        </div>
        <div class="flex items-center flex-col md:flex-row px-8 md:px-20 py-10 md:py-12">
          <div class="flex-shrink-0">
            <AboutStepOne class="w-56"/>
          </div>
          <div class="md:ml-12 mt-6 md:mt-0">
            <h3 class="font-bold text-gray-800">Become a humand</h3>
            <p class="m-0 text-gray-800">Create your account and become a part of the humand-family</p>
            <p class="text-gray-600">Supporting Projects was never that easy – create your humand-account select a project, set the amount of the contribution and support charitable causes, let’s go!</p>
          </div>
        </div>
      </div>

      <div class="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="px-6 py-3 bg-green-500">
          <h2 class="uppercase tracking-wider text-green-100">Choose your projects</h2>
        </div>
        <div class="flex items-center flex-col md:flex-row px-8 md:px-20 py-10 md:py-12">
          <div class="flex-shrink-0">
            <AboutStepTwo class="w-56"/>
          </div>
          <div class="md:ml-12 mt-6 md:mt-0">
            <h3 class="font-bold text-gray-800">Make your choice</h3>
            <p class="m-0 text-gray-800">Select meaningful projects and choose your monthly donation</p>
            <p class="text-gray-600">You can’t decide which project you want to support? No worries – you are able to choose several projects and decide how you would like to split your monthly donation.</p>
          </div>
        </div>
      </div>

      <div class="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="px-6 py-3 bg-green-500">
          <h2 class="uppercase tracking-wider text-green-100">Manage your donations</h2>
        </div>
        <div class="flex items-center flex-col md:flex-row px-8 md:px-20 py-10 md:py-12">
          <div class="flex-shrink-0">
            <AboutStepThree class="w-56"/>
          </div>
          <div class="md:ml-12 mt-6 md:mt-0">
            <h3 class="font-bold text-gray-800">Your choice – every month</h3>
            <p class="text-gray-800">Check your Inbox</p>
            <p class="mt-0 text-gray-600">Here you’ll find important and current informations about the projects you support. Stay up to date and see that your donation matters!</p>
            <p class="text-gray-800">Manage your monthly projects & amount of donation</p>
            <p class="mt-0 text-gray-600">Is there a new project you would like to support? Perfect – you can edit your total donation and your projects every month. </p>
            <p class="text-gray-800">Change payment method</p>
            <p class="mt-0 text-gray-600">Just like the project, you can also modify your payment method whenever you want.</p>
          </div>
        </div>
      </div>

      <div class="mt-10 flex justify-center">
        <AppButton buttonText="Sign up now" iconComp="iconArrowRight" buttonStyle="secondary" class="shadow-lg"/>
      </div>
    </ContainerConstrained>
  </Layout>
</template>

<script>
import AboutStepOne from '~/components/layout/about/AboutStepOne.vue';
import AboutStepTwo from '~/components/layout/about/AboutStepTwo.vue';
import AboutStepThree from '~/components/layout/about/AboutStepThree.vue';

export default {
  metaInfo: {
    title: 'How does it work?'
  },
  components: {
    AboutStepOne, AboutStepTwo, AboutStepThree
  }
}
</script>
