<template>
  <div id="projects" class="projects">
    <div class="container">
      <div class="projects__section projects__section--oasis">
        <h1>
          <span class="text-red">Our</span> projects
        </h1>
        <div id="oasis-coin"></div>
        <h2 class="pt-sans">
          Oasis Token
        </h2>
        <h4 class="text-red pt-sans">
          Live on Raydium Swap
        </h4>
        <p>
          We created Oasis token wich will provide its holders with access to a wide range of the projects developed by the Community.
          <br>
          <br>
          The token was created on the Solana network.
        </p>
        <a href="https://raydium.io/swap/?from=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&to=8oiPhiFrmXS93iC98M4ATev8emQ6XGtf8pz8sntbbqGt" target="_blank" class="btn btn-danger">
          Buy Token
        </a>
      </div>
      <div class="projects__section projects__section--voodoo-cave">
        <div id="voodoo-cave">
          <div id="voodoo-cave-first"></div>
          <div id="voodoo-cave-second"></div>
          <voodoo-cave-logo id="voodoo-cave-logo" />
          <div id="voodoo-cave-third"></div>
        </div>
        <h2 class="pt-sans">
          Voodoo Cave
        </h2>
        <h4 class="text-purple pt-sans">
          Website is coming soon
        </h4>
        <p>
          <b>Voodoo Cave</b> — is an innovative CDN (Combinatory-deflationary NFT) project.
          <br>
          <br>
          Our project is highly coupled with the Oasis token and leverages it as in-game currency.
        </p>
        <div class="buttons">
          <a href="https://twitter.com/voodoocave" target="_blank" class="btn btn-purple fixed-width">
            Follow
          </a>
          <a href="#" class="btn btn-purple-outline fixed-width">
            Details
          </a>
        </div>
      </div>
      <div class="projects__section projects__section--solomid">
        <div id="solomid">
          <div id="solomid-animation"></div>
          <solomid-logo id="solomid-logo" />
        </div>
        <h2 class="pt-sans">
          SolOmid
        </h2>
        <h4 class="text-purple pt-sans">
          Get your Omid now!
        </h4>
        <p>
          Solomid will be used in the game “Voodoo Cave” as unique pets.
          <br>
          <br>
          Which will make your journey through the obstacles that the game entails much easier and save you from unnecessary costs!
        </p>
        <div class="buttons">
          <a href="https://get.solomid.io/" target="_blank" class="btn btn-blue fixed-width">
            Mint
          </a>
          <a href="https://solomid.io/" target="_blank" class="btn btn-brown-outline fixed-width">
            Details
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts">
</script>

<style scoped lang="stylus">
  @import 'styles/index.styl';
</style>
