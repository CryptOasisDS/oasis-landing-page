import { Component, Vue } from 'nuxt-property-decorator'
import TokenLogo from '~/assets/images/token-logo.svg'
import Discord from '~/assets/images/discord.svg'
import Twitter from '~/assets/images/twitter.svg'

@Component({
  components: {
    TokenLogo,
    Discord,
    Twitter
  }
})
export default class FooterComponent extends Vue {
  get year () {
    return new Date().getFullYear()
  }
}
