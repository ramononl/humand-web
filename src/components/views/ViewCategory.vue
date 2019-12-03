<template>
  <div>
    <div class="flex items-center">
      <h2>Animals</h2>
      <div class="ml-3 px-1 cursor-pointer hover:bg-gray-500 text-xxs rounded border border-gray-500 tracking-widest font-bold text-gray-500 hover:text-gray-100 uppercase">View all</div>
    </div>
    <p class="mt-1 text-gray-600">Donate for environmental protection! Whether climate change, water pollution or environmental policy.</p>
    <ProjectCardContainer>
      <ProjectCard v-for="project in projectsAnimals" :key="project.node.id" :cardData="project.node"/>
    </ProjectCardContainer>
    
    <div class="mt-10 flex items-center">
      <h2>Arts & Culture</h2>
      <div class="ml-3 px-1 cursor-pointer hover:bg-gray-500 text-xxs rounded border border-gray-500 tracking-widest font-bold text-gray-500 hover:text-gray-100 uppercase">View all</div>
    </div>
    <p class="mt-1 text-gray-600">Donate for environmental protection! Whether climate change, water pollution or environmental policy.</p>
    <ProjectCardContainer>
      <ProjectCard v-for="project in projectsArts" :key="project.node.id" :cardData="project.node"/>
    </ProjectCardContainer>
    
    <div class="mt-10 flex items-center">
      <h2>Community Development</h2>
      <div class="ml-3 px-1 cursor-pointer hover:bg-gray-500 text-xxs rounded border border-gray-500 tracking-widest font-bold text-gray-500 hover:text-gray-100 uppercase">View all</div>
    </div>
    <p class="mt-1 text-gray-600">Donate for environmental protection! Whether climate change, water pollution or environmental policy.</p>
    <ProjectCardContainer>
      <ProjectCard v-for="project in projectsCommunity" :key="project.node.id" :cardData="project.node"/>
    </ProjectCardContainer>
    
    <div class="mt-10 flex items-center">
      <h2>Education</h2>
      <div class="ml-3 px-1 cursor-pointer hover:bg-gray-500 text-xxs rounded border border-gray-500 tracking-widest font-bold text-gray-500 hover:text-gray-100 uppercase">View all</div>
    </div>
    <p class="mt-1 text-gray-600">Donate for environmental protection! Whether climate change, water pollution or environmental policy.</p>
    <ProjectCardContainer>
      <ProjectCard v-for="project in projectsEducation" :key="project.node.id" :cardData="project.node"/>
    </ProjectCardContainer>
    
    <div class="mt-10 flex items-center">
      <h2>Environment</h2>
      <div class="ml-3 px-1 cursor-pointer hover:bg-gray-500 text-xxs rounded border border-gray-500 tracking-widest font-bold text-gray-500 hover:text-gray-100 uppercase">View all</div>
    </div>
    <p class="mt-1 text-gray-600">Donate for environmental protection! Whether climate change, water pollution or environmental policy.</p>
    <ProjectCardContainer>
      <ProjectCard v-for="project in projectsEnvironment" :key="project.node.id" :cardData="project.node"/>
    </ProjectCardContainer>
    
    <div class="mt-10 flex items-center">
      <h2>Health</h2>
      <div class="ml-3 px-1 cursor-pointer hover:bg-gray-500 text-xxs rounded border border-gray-500 tracking-widest font-bold text-gray-500 hover:text-gray-100 uppercase">View all</div>
    </div>
    <p class="mt-1 text-gray-600">Donate for environmental protection! Whether climate change, water pollution or environmental policy.</p>
    <ProjectCardContainer>
      <ProjectCard v-for="project in projectsHealth" :key="project.node.id" :cardData="project.node"/>
    </ProjectCardContainer>
    
    <div class="mt-10 flex items-center">
      <h2>Human Services</h2>
      <div class="ml-3 px-1 cursor-pointer hover:bg-gray-500 text-xxs rounded border border-gray-500 tracking-widest font-bold text-gray-500 hover:text-gray-100 uppercase">View all</div>
    </div>
    <p class="mt-1 text-gray-600">Let all children be happy! Donate now for children and youth projects.</p>
    <ProjectCardContainer>
      <ProjectCard v-for="project in projectsHuman" :key="project.node.id" :cardData="project.node"/>
    </ProjectCardContainer>

  </div>
</template>

<script>
import ProjectCardContainer from '~/components/layout/ProjectCardContainer.vue'
import ProjectCard from '~/components/ui/ProjectCard.vue'

export default {
  props: ['projectData'],
  components: {
    ProjectCardContainer,
    ProjectCard
  },
  computed: {
    projectsAnimals() {      
      const projectsFiltered = this.projectData.filter(function (el) {
        return el.node.category === "Animals"
      });
      return projectsFiltered
    },
    projectsArts() {      
      const projectsFiltered = this.projectData.filter(function (el) {
        return el.node.category === "Arts & Culture"
      });
      return projectsFiltered
    },
    projectsCommunity() {      
      const projectsFiltered = this.projectData.filter(function (el) {
        return el.node.category === "Community Development"
      });
      return projectsFiltered
    },
    projectsEducation() {      
      const projectsFiltered = this.projectData.filter(function (el) {
        return el.node.category === "Education"
      });
      return projectsFiltered
    },
    projectsEnvironment() {      
      const projectsFiltered = this.projectData.filter(function (el) {
        return el.node.category === "Environment"
      });
      return projectsFiltered
    },
    projectsHealth() {      
      const projectsFiltered = this.projectData.filter(function (el) {
        return el.node.category === "Health"
      });
      return projectsFiltered
    },
    projectsHuman() {      
      const projectsFiltered = this.projectData.filter(function (el) {
        return el.node.category === "Human Services"
      });
      return projectsFiltered
    },
  }
}
</script>

<style>

</style>