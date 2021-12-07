<template>
  <footer>
    <div class="container footer">
      <div class="footer__left-side">
        <token-logo></token-logo>
        Oasis Community © {{ year }}
      </div>
      <div class="footer__right-side">
        <a href="https://twitter.com/CryptOasisDS" target="_blank">
          <twitter />
        </a>
        <a href="https://discord.gg/cryptoasisds" target="_blank">
          <discord />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" src="./index.ts">
</script>

<style scoped lang="stylus">
  @import 'styles/index.styl';
</style>
