<script setup>
  import { RouterView } from "vue-router";
  import Navigation from "./components/Navigation.vue";
  import QazMap from "./components/QazMap.vue";
  import ModalBlock from "./components/ModalBlock.vue";
</script>
<template>
  <div class="App">
    <div class="AllComponents">
      <Navigation class="nav_block"/>
      <router-view class="router_block"></router-view>
    </div>
    <ModalBlock/>
  </div>
</template>

<style scoped>
  .AllComponents{
    display: grid;
    grid-auto-columns: 1fr; 
    grid-template-columns: 335px 1fr; 
    grid-template-rows: 1fr; 
    gap: 0% 0%; 
    grid-template-areas: 
    "nav_block router_block"; 
}
.nav_block { grid-area: nav_block; }
.router_block { grid-area: router_block; }
  router-view {
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 431px){
  .AllComponents{
    display: flex;
    flex-direction: column;
  }
}
</style>
