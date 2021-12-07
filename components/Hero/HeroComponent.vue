<template>
  <div id="hero" class="hero">
    <div class="container">
      <div class="hero__left">
        <h1>
          <span class="text-red">Who</span> we are?
        </h1>
        <p class="hero__p--first">
          «Oasis» is a small but strong community of crypto-enthusiasts, programmers and digital design experts.
        </p>
        <div class="hero__token">
          <token-logo />
          <p>
            We have our own Oasis Token around which we build projects.
          </p>
        </div>
        <div class="hero__buttons">
          <a class="btn fixed-width btn-danger" href="https://raydium.io/swap/?from=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&to=8oiPhiFrmXS93iC98M4ATev8emQ6XGtf8pz8sntbbqGt" target="_blank">
            Buy token
          </a>
          <a class="btn fixed-width" href="/oasis.pdf" target="_blank">
            Presentation
          </a>
        </div>
      </div>
      <div class="hero__right">
        <h1>
          What we do?
        </h1>
        <ul class="hero__p--second">
          <li>
            We believe that the rapid uptake in new technologies will allow us to be at the cutting edge with Metaverse by quickly boosting projects for investors and creators through our matchmaking ecosystem.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts">
</script>

<style scoped lang="stylus">
  @import 'styles/index.styl';
</style>
