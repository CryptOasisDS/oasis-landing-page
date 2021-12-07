import { Component, Vue } from 'nuxt-property-decorator'
import lottie from 'lottie-web'
import VoodooCaveLogo from '~/assets/images/voodoo-cave-logo.svg'
import SolomidLogo from '~/assets/images/solomid-logo.svg'

@Component({
  components: {
    VoodooCaveLogo,
    SolomidLogo
  }
})
export default class ProjectsComponent extends Vue {
  mounted () {
    lottie.loadAnimation({
      container: document.getElementById('oasis-coin')!, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animation/oasis-coin.json' // the path to the animation json
    })
    lottie.loadAnimation({
      container: document.getElementById('voodoo-cave-first')!, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animation/voodoo-cave-1.json' // the path to the animation json
    })
    lottie.loadAnimation({
      container: document.getElementById('voodoo-cave-second')!, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animation/voodoo-cave-2.json' // the path to the animation json
    })
    lottie.loadAnimation({
      container: document.getElementById('voodoo-cave-third')!, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animation/voodoo-cave-3.json' // the path to the animation json
    })
    lottie.loadAnimation({
      container: document.getElementById('solomid-animation')!, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animation/solomid.json' // the path to the animation json
    })
  }
}
