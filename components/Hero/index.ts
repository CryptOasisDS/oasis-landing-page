import { Component, Vue } from 'nuxt-property-decorator'
import { gsap } from 'gsap'
import TokenLogo from '~/assets/images/token-logo.svg'

@Component({
  components: {
    TokenLogo
  }
})
export default class HeroComponent extends Vue {
  mounted () {
    const timeline = gsap.timeline()
    timeline.fromTo('.hero__left', { y: -20, opacity: 0 }, {
      opacity: 1,
      delay: 1,
      duration: 1,
      y: 0
    }).fromTo('.hero__right', { y: -20, opacity: 0 }, {
      opacity: 1,
      duration: 1,
      y: 0
    })
  }
}
