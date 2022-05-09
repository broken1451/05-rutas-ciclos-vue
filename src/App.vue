<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
// import Navbar from "@/modules/shared/components/Navbar.vue";
import {defineAsyncComponent} from 'vue';
export default {
  name: "App",
  components: {
    // Navbar
    // with lazyloading
    Navbar: defineAsyncComponent( () =>
      import(
        /* webpackChunkName: "NAVBAR" */ "@/modules/shared/components/Navbar.vue"
      )),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
