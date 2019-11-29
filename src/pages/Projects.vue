<template>
  <Layout>
    <ProjectFilter @setParentProjectView="setProjectView"/>
    <div class="mt-10">
      <ViewCategory v-if="projectView === 'category'" :projectData="projectData" />
      <ViewMap v-if="projectView === 'map'" :projectData="projectData" />
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
import ViewCategory from '~/components/views/ViewCategory.vue'
import ViewMap from '~/components/views/ViewMap.vue'

export default {
  metaInfo: {
    title: 'Discover Projects'
  },
  components: {
    ProjectFilter,
    ViewCategory,
    ViewMap
  },
  data() {
    return {
      projectView: "category",
    }
  },
  computed: {
    projectData() {
      return this.$static.allProjectPage.edges
    }
  },
  methods: {
    setProjectView(view) {
      this.projectView = view;
    }
  }
}
</script>

<style>

</style>