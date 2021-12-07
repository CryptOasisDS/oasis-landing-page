import { Component, Vue } from 'nuxt-property-decorator'
import { gsap } from 'gsap'
import Logo from '~/assets/images/logo.svg'
import Discord from '~/assets/images/discord.svg'
import Twitter from '~/assets/images/twitter.svg'
import Menu from '~/assets/images/menu.svg'

@Component({
  components: {
    Logo,
    Discord,
    Twitter,
    MenuIcon: Menu
  }
})
export default class HeaderComponent extends Vue {
  menu: boolean = false

  toggleMenu () {
    this.menu = !this.menu
  }

  mounted () {
    const timeline = gsap.timeline()
    timeline.fromTo('.header__left', { y: -20, opacity: 0 }, {
      opacity: 1,
      duration: 1,
      y: 0
    }).fromTo('.header__middle', { y: -20, opacity: 0 }, {
      opacity: 1,
      duration: 1,
      y: 0
    }).fromTo('.header__right', { y: -20, opacity: 0 }, {
      opacity: 1,
      duration: 1,
      y: 0
    })
  }
}
