import { Component, Vue } from 'nuxt-property-decorator'
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
}
