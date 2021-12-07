import { Component, Vue } from 'nuxt-property-decorator'
import TokenLogo from '~/assets/images/token-logo.svg'

@Component({
  components: {
    TokenLogo
  }
})
export default class HeroComponent extends Vue {
}
