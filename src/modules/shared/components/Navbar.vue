<template lang="">
    <div>
        <!-- sin personalizar -->
        <!-- <router-link :to="{ name: 'home'}">Pokemon list</router-link> 
        <router-link :to="{ name: 'pokemon-id', params: { pokemonId: 85 }}">Pokemon por id</router-link> 
        <router-link :to="{ name: 'about'}">About</router-link>  -->
    <CustomLink v-for="link in links" :key="link.to" :link='link'/>

    </div>
        
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  data() {
    return {
      links: [
        { to: "home-pokemon", name: "Pokemons" },
        { to: "pokemon-id", name: "Por ID", pokemonId: 151 },
        { to: "about-pokemon", name: "About Pokemon" },
        { to: "https://google.com", name: "Google" },
        { to: "characters-dbz", name: "characters-dbz" },
        { to: "about-dbz", name: "about-dbz" },

        // { to: "/pokemon/home", name: "Pokemons" },
        // { to: "/pokemon/50", name: "Por ID", pokemonId: 151 },
        // { to: "/about", name: "About" },
        // { to: "https://google.com", name: "Google" },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink")),
  },
};
</script>
<style scoped>
div {
  padding: 0 30px;
}

div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

div .router-link-exact-active {
  /* color: #42b983; */
}
</style>