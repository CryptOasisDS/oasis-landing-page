<template>
  <div>
    <header-component></header-component>
    <hero-component></hero-component>
    <projects-component></projects-component>
    <launchpad-component></launchpad-component>
    <mechanics-component></mechanics-component>
    <footer-component></footer-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HeaderComponent from '~/components/Header/HeaderComponent.vue'
import HeroComponent from '~/components/Hero/HeroComponent.vue'
import ProjectsComponent from '~/components/Projects/ProjectsComponent.vue'
import LaunchpadComponent from '~/components/Launchpad/LaunchpadComponent.vue'
import MechanicsComponent from '~/components/Mechanics/MechanicsComponent.vue'
import FooterComponent from '~/components/Footer/FooterComponent.vue'

@Component({
  components: {
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    LaunchpadComponent,
    MechanicsComponent,
    FooterComponent
  }
})
export default class IndexPage extends Vue {
}
</script>
