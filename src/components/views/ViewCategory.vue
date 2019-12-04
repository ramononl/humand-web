<template>
  <div>
    <div class="flex items-center">
      <h2>Animals</h2>
      <div class="ml-3 px-1 cursor-pointer hover:bg-gray-500 text-xxs rounded border border-gray-500 tracking-widest font-bold text-gray-500 hover:text-gray-100 uppercase">View all</div>
    </div>
    <p class="mt-1 text-gray-600">Support animals in need and help the animal welfare organizations to stand up against cruelty to animals!</p>
    <ProjectCardContainer>
      <ProjectCard v-for="project in projectsAnimals" :key="project.node.id" :cardData="project.node"/>
    </ProjectCardContainer>
    
    <div class="mt-10 flex items-center">
      <h2>Arts & Culture</h2>
      <div class="ml-3 px-1 cursor-pointer hover:bg-gray-500 text-xxs rounded border border-gray-500 tracking-widest font-bold text-gray-500 hover:text-gray-100 uppercase">View all</div>
    </div>
    <p class="mt-1 text-gray-600">Support cultural projects and do great things. Promote outstanding projects that are of relevance to society and unusual in terms of aesthetics or form.</p>
    <ProjectCardContainer>
      <ProjectCard v-for="project in projectsArts" :key="project.node.id" :cardData="project.node"/>
    </ProjectCardContainer>
    
    <div class="mt-10 flex items-center">
      <h2>Community Development</h2>
      <div class="ml-3 px-1 cursor-pointer hover:bg-gray-500 text-xxs rounded border border-gray-500 tracking-widest font-bold text-gray-500 hover:text-gray-100 uppercase">View all</div>
    </div>
    <p class="mt-1 text-gray-600">Your donation counts. Help to improve the living conditions and the economic status of disadvantaged communities.</p>
    <ProjectCardContainer>
      <ProjectCard v-for="project in projectsCommunity" :key="project.node.id" :cardData="project.node"/>
    </ProjectCardContainer>
    
    <div class="mt-10 flex items-center">
      <h2>Education</h2>
      <div class="ml-3 px-1 cursor-pointer hover:bg-gray-500 text-xxs rounded border border-gray-500 tracking-widest font-bold text-gray-500 hover:text-gray-100 uppercase">View all</div>
    </div>
    <p class="mt-1 text-gray-600">With your support, give disadvantaged children a chance for a better future. Donate now for blackboards, school supplies, new books and happy children!</p>
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
    <p class="mt-1 text-gray-600">Your donation can preserve life, prevent disease and improve the health and quality of life of the beneficiaries and their families.</p>
    <ProjectCardContainer>
      <ProjectCard v-for="project in projectsHealth" :key="project.node.id" :cardData="project.node"/>
    </ProjectCardContainer>
    
    <div class="mt-10 flex items-center">
      <h2>Human Services</h2>
      <div class="ml-3 px-1 cursor-pointer hover:bg-gray-500 text-xxs rounded border border-gray-500 tracking-widest font-bold text-gray-500 hover:text-gray-100 uppercase">View all</div>
    </div>
    <p class="mt-1 text-gray-600">With your donation you give people the chance for a better life!</p>
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