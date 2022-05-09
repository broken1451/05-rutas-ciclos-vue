<template lang="">
    <div style='display:inline-block'>
        <a v-if="isExternalLink" :href="link.to" target='_blank' class='normal-link'> {{link.name}}</a>
        <!-- <router-link v-else :to='{name:link.to,  params: { pokemonId: 151 }}' v-slot="{ href, route, isActive }"> -->
        <router-link v-else :to='route' v-slot="{ href, route, isActive }">
          <!-- :href='href' -->
              <a target='' :class="isActive ? 'is-active' : 'normal-link'"> {{link.name}} </a>
              <!-- <a :href='href' target=''> {{route.fullPath}} </a> -->
        </router-link>
    </div>
</template>
<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
    route() {
      return this.link.pokemonId === undefined
        ? { name: this.link.to }
        : { name: this.link.to, params: { pokemonId: this.link.pokemonId } };
    },
  },
};
</script>
<style scoped>
.is-active {
  color: #42b983;
}

a {
  text-decoration: none;
}

.normal-link {
  color: #c6c5c5;
}
</style>