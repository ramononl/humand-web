<template>
  <Layout>
    <ProjectFilter/>
    <div>
      <div class="mt-10 flex items-center">
        <h2 class="text-2xl font-bold text-gray-700">Environment</h2>
        <div class="ml-3 px-1 hover:bg-gray-500 text-xxs rounded border border-gray-500 tracking-widest font-bold text-gray-500 hover:text-gray-100 uppercase">View all</div>
      </div>
      <p class="mt-1 text-gray-600">Donate for environmental protection! Whether climate change, water pollution or environmental policy.</p>
      <ProjectCardContainer>
        <ProjectCard v-for="project in projectsEnvironment" :key="project.node.id" :cardData="project.node"/>
      </ProjectCardContainer>
      <div class="mt-10 flex items-center">
        <h2 class="text-2xl font-bold text-gray-700">Children and youth</h2>
        <div class="ml-3 px-1 text-xxs rounded border border-gray-500">
          <span class="tracking-widest font-bold text-gray-500 uppercase">View all</span>
        </div>
      </div>
      <p class="mt-1 text-gray-600">Let all children be happy! Donate now for children and youth projects.</p>
      <ProjectCardContainer>
        <ProjectCard v-for="project in projectsChildren" :key="project.node.id" :cardData="project.node"/>
      </ProjectCardContainer>
    </div>
  </Layout>
</template>

<static-query>
query AllProjects {
  allProjectPage {
    edges {
      node {
        id
        title
        category
        path
        organization
        tags
        image (width: 320, height: 240)
      }
    }
  }
}
</static-query>

<script>
import ProjectFilter from '~/components/ui/ProjectFilter.vue'
import ProjectCardContainer from '~/components/layout/ProjectCardContainer.vue'
import ProjectCard from '~/components/ui/ProjectCard.vue'

export default {
  metaInfo: {
    title: 'Discover Projects'
  },
  components: {
    ProjectFilter,
    ProjectCardContainer,
    ProjectCard
  },
  computed: {
    projectsEnvironment() {      
      const projectsFiltered = this.$static.allProjectPage.edges.filter(function (el) {
        return el.node.category === "Environment"
      });
      return projectsFiltered
    },
    projectsChildren() {      
      const projectsFiltered = this.$static.allProjectPage.edges.filter(function (el) {
        return el.node.category === "Children and youth"
      });
      return projectsFiltered
    }
  }
}
</script>

<style>

</style>