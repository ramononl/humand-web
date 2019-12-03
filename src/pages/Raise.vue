<template>
  <Layout>
    <ContainerConstrained>
      <h1>Publish your own charitable projects</h1>
      <p class="mt-0 text-gray-600">Raise funds for charitable causes as a non-profit organization or as an individual.</p>
    </ContainerConstrained>
    <div class="xl:mx-24">
      <div class="mt-8 -mx-3 flex flex-wrap lg:flex-no-wrap">
        <div class="mt-3 mx-3 flex-1">
          <div class="flex flex-col justify-between px-3 py-6 h-full bg-white shadow-lg rounded-lg">
            <div class="h-40 flex content-center">
              <RaiseStepOne class="w-32 mx-auto"/>
            </div>
            <div class="mt-5">
              <h3 class="font-semibold text-center text-gray-700">Sign up</h3>
              <p class="text-center text-gray-600">Tell us about your organization and/or project and your whereabouts.</p>
            </div>
          </div>
        </div>
        <div class="mt-3 mx-3 flex-1">
          <div class="flex flex-col justify-between px-3 py-6 h-full bg-white shadow-lg rounded-lg">
            <div class="h-40 flex content-center">
              <RaiseStepTwo class="w-32 mx-auto"/>
            </div>
            <div class="mt-5">
              <h3 class="font-semibold text-center text-gray-700">Get verified</h3>
              <p class="text-center text-gray-600">After we checked your information, you will receive a confirmation email.</p>
            </div>
          </div>
        </div>
        <div class="mt-3 mx-3 flex-1">
          <div class="flex flex-col justify-between px-3 py-6 h-full bg-white shadow-lg rounded-lg">
            <div class="h-40 flex content-center">
              <RaiseStepThree class="w-32 mx-auto"/>
            </div>
            <div class="mt-5">
              <h3 class="font-semibold text-center text-gray-700">Raise donations</h3>
              <p class="text-center text-gray-600">Publish your first project and start receiving your first donations.</p>
            </div>
          </div>
        </div>
        <div class="mt-3 mx-3 flex-1">
          <div class="flex flex-col justify-between px-3 py-6 h-full bg-white shadow-lg rounded-lg">
            <div class="h-40 flex content-center">
              <RaiseStepFour class="w-48 mx-auto"/>
            </div>
            <div class="mt-5">
              <h3 class="font-semibold text-center text-gray-700">Post updates</h3>
              <p class="text-center text-gray-600">Post news and updates about your project to keep your supporters on board.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 flex justify-center">
        <AppButton buttonText="Sign up now" iconComp="iconArrowRight" buttonStyle="secondary" class="shadow-lg"/>
      </div>
    </div>
    <ContainerConstrained>
      <div class="md:flex mt-16 bg-white rounded-lg shadow-lg">
        <div class="md:w-8/12 px-6 sm:px-8 md:px-12 py-10 flex-shrink-0">
          <h2 class="text-xl">Raise funds with humand</h2>
          <p class="mt-2 font-semibold text-gray-700">Everyone will find the right tools for individual online fundraising with humand! Associations and organizations can set up a donation account on our platform, present their project and collect donations online on their own project page.</p>
          <p class="text-gray-700">We help associations with tips and knowledge to use the internet optimally for their good cause and to spread their call for donations online and offline.</p>
          <p class="text-gray-700">On our site you can also collect donations for yourself. With your humand donation page you can collect money and crowdfund easily! There are no limits to your ideas: whether it's a donation marathon, donations instead of birthday presents or shaving your beard for donations - everything is possible!</p>
        </div>
        <div class="md:w-4/12 px-6 sm:px-8 py-10 flex-shrink-0 md:border-l">
          <div class="rounded-lg border overflow-hidden text-gray-600">
            <div class="px-4 py-3 text-sm uppercase bg-green-500 text-green-100 font-semibold tracking-wider">Frequently Asked Questions</div>
            <div class="group px-4 py-3 flex justify-between items-center border-b cursor-pointer">
              <p class="group-hover:text-gray-700 m-0 leading-tight">What information do I need to provide to raise funds?</p>
              <IconBase class="ml-1 flex-shrink-0 text-gray-500 group-hover:text-gray-700"><IconCheveronDown/></IconBase>
            </div>
            <div class="group px-4 py-3 flex justify-between items-center border-b cursor-pointer">
              <p class="group-hover:text-gray-700 m-0 leading-tight">Who can raise funds with humand?</p>
              <IconBase class="ml-1 flex-shrink-0 text-gray-500 group-hover:text-gray-700"><IconCheveronDown/></IconBase>
            </div>
            <div class="group px-4 py-3 flex justify-between items-center border-b cursor-pointer">
              <p class="group-hover:text-gray-700 m-0 leading-tight">What do I have to do to raise funds?</p>
              <IconBase class="ml-1 flex-shrink-0 text-gray-500 group-hover:text-gray-700"><IconCheveronDown/></IconBase>
            </div>
            <div class="group px-4 py-3 flex justify-between items-center border-b cursor-pointer">
              <p class="group-hover:text-gray-700 m-0 leading-tight">Why do I have to register?</p>
              <IconBase class="ml-1 flex-shrink-0 text-gray-500 group-hover:text-gray-700"><IconCheveronDown/></IconBase>
            </div>
            <div class="group px-4 py-3 flex justify-between items-center border-b cursor-pointer">
              <p class="group-hover:text-gray-700 m-0 leading-tight">Who gets the donations?</p>
              <IconBase class="ml-1 flex-shrink-0 text-gray-500 group-hover:text-gray-700"><IconCheveronDown/></IconBase>
            </div>
            <div class="group px-4 py-3 flex justify-between items-center border-b cursor-pointer">
              <p class="group-hover:text-gray-700 m-0 leading-tight">How can I contact my donors?</p>
              <IconBase class="ml-1 flex-shrink-0 text-gray-500 group-hover:text-gray-700"><IconCheveronDown/></IconBase>
            </div>
            <div class="group px-4 py-3 flex justify-between items-center border-b cursor-pointer">
              <p class="group-hover:text-gray-700 m-0 leading-tight">Where can I view the received donations?</p>
              <IconBase class="ml-1 flex-shrink-0 text-gray-500 group-hover:text-gray-700"><IconCheveronDown/></IconBase>
            </div>
          </div>
        </div>
      </div>
    </ContainerConstrained>
  </Layout>
</template>

<script>
import RaiseStepOne from '~/components/layout/raise/RaiseStepOne.vue';
import RaiseStepTwo from '~/components/layout/raise/RaiseStepTwo.vue';
import RaiseStepThree from '~/components/layout/raise/RaiseStepThree.vue';
import RaiseStepFour from '~/components/layout/raise/RaiseStepFour.vue';

export default {
  metaInfo: {
    title: "Raise funds"
  },
  components: {
    RaiseStepOne, RaiseStepTwo, RaiseStepThree, RaiseStepFour
  }
};
</script>
