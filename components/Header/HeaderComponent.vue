<template>
  <header id="header">
    <div class="container header">
      <div class="header__left">
        <logo />
      </div>
      <div class="header__middle">
        <a href="#hero">
          <h3>
            Who we are
          </h3>
        </a>
        <a href="#projects">
          <h3>
            Projects
          </h3>
        </a>
        <a href="#launchpad">
          <h3>
            Launchpad
          </h3>
        </a>
      </div>
      <div class="header__right socials">
        <a href="https://twitter.com/CryptOasisDS" target="_blank">
          <twitter />
        </a>
        <a href="https://discord.gg/cryptoasisds" target="_blank">
          <discord />
        </a>
      </div>
      <div class="header__menu">
        <a href="#" @click="toggleMenu">
          <menu-icon />
        </a>
      </div>
    </div>
    <div v-if="menu" class="mobile-menu">
      <a href="#hero">
        <h3>
          Who we are
        </h3>
      </a>
      <a href="#projects">
        <h3>
          Projects
        </h3>
      </a>
      <a href="#launchpad">
        <h3>
          Launchpad
        </h3>
      </a>
      <div class="socials">
        <a href="https://twitter.com/CryptOasisDS" target="_blank">
          <twitter />
        </a>
        <a href="https://discord.gg/cryptoasisds" target="_blank">
          <discord />
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" src="./index.ts">
</script>

<style scoped lang="stylus">
  @import 'styles/index.styl';
</style>
