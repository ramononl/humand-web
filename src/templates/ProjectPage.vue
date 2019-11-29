<template>
  <Layout>
    <ContainerConstrained>
      <div class="mb-3">
        <g-link to="/projects" class="inline-flex items-center group">
          <IconBase class="text-gray-600 group-hover:text-gray-500 transition-all" :iconClasses="['w-10 h-10']"><IconBack/></IconBase>
          <span class="-ml-2 inline-block font-bold text-gray-600 group-hover:text-gray-500 transition-all">Go back</span>
        </g-link>
      </div>
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="relative cursor-pointer">
          <g-image :src="$page.projectPage.image" :alt="$page.projectPage.title" class=""/>
          <div class="absolute inset-0">
            <div class="h-full flex justify-center items-center">
              <IconBase class="text-green-500" :iconClasses="['w-20 h-20']"><IconPlay/></IconBase>
              <div class="ml-1 bg-green-500 text-green-100 rounded-full text-xl font-bold px-6 py-1">Play video</div>
            </div>
          </div>
        </div>
        <div class="md:flex">
          <div class="md:w-8/12 px-6 sm:px-8 md:px-12 py-10 flex-shrink-0">
            <div class="xl:flex xl:items-center">
              <h2>{{ $page.projectPage.title }}</h2>
              <div class="inline-flex xl:ml-2 px-1 text-xxs rounded border border-gray-500 items-center">
                <span class="tracking-widest font-bold text-gray-600 uppercase">{{ $page.projectPage.organization }}</span>
                <IconBase class="ml-1 text-gray-500" :iconClasses="['w-3 h-3']"><IconVerified/></IconBase>
              </div>
            </div>
            <p v-html="$page.projectPage.intro" class="mt-2 font-bold text-gray-700"/>
            <TagContainer>
              <ProjectTag v-for="tag in $page.projectPage.tags" :key="tag.id">
                {{ tag }}
              </ProjectTag>
              <ProjectTag v-for="region in $page.projectPage.region" :key="region.id">
                {{ region }}
              </ProjectTag>
            </TagContainer>
            <article class="mt-8">
              <h3 class="text-xl font-bold text-gray-700">About the project</h3>
              <div v-html="$page.projectPage.content" class="mt-3 text-gray-700"/>
            </article>
          </div>
          <div class="md:w-4/12 px-6 sm:px-8 py-10 flex-shrink-0 md:border-l border-gray-300">
            <AppButton link="#signin" buttonStyle="secondary" buttonText="Support this project" class="text-sm inline-block w-full text-center"/>
            <div class="mt-4">
              <p class="text-sm">Join <span class="font-bold">{{ $page.projectPage.supporters }} other humands</span> supporting this project.</p>
              <div class="mt-2 flex flex-wrap">
                <IconBase v-for="i in numberOfUserIcons" :key="i" class="text-green-500" :iconClasses="['w-6 h-6']"><IconUser/></IconBase>
              </div>
              <div class="mt-4 flex items-center">
                <IconBase class="text-gray-500" :iconClasses="['w-6 h-6']"><IconUser/></IconBase>
                <span class="text-sm text-gray-600 font-bold">= 10 people</span>
              </div>
            </div>
            <div class="mt-6">
              <h4 class="text-orange-500 font-bold">News from this project</h4>
              <p class="uppercase text-xs">Oct 12th 2019</p>
              <h5>World Oceans Day</h5>
              <p class="text-sm">Next Saturday, June 8th, will again be “World Oceans Day”. For 10 years now, the United Nations has been drawing attention to the value and worldwide threat to the oceans on this day.</p>
            </div>
          </div>
        </div>
      </div>
    </ContainerConstrained>
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
	projectPage (path: $path) {
    image (width: 896, height: 536)
    title
    organization
    intro
    tags
    region
    content
    supporters
  }
}
</page-query>

<script>
export default {
  computed: {
    numberOfUserIcons() {
      return Math.floor(this.$page.projectPage.supporters / 10)
    }
  }
};
</script>