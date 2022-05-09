<template lang="">
    <div>
        <!-- <h1>Pokemon: <span>#{{$route.params.pokemonId}}</span> </h1> -->
        <!-- <h1>Pokemon: <span>#{{id}}</span> </h1> -->
        <h1>Pokemon: <span>#{{pokemonId}}</span> </h1>
        <div v-if="poke">
            <img :src='poke.sprites.front_default' :alt='poke.name'/>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      id: null,
      poke: null,
      //   id: this.$route.params.pokemonId,
    };
  },
  created() {
    // const { pokemonId } = this.$route.params;
    // this.id =  this.$route.params.pokemonId;
    // console.log(pokemonId);
    // console.log(this.$attrs);
    // console.log(this.$route.params.pokemonId);
    this.getPokemons();
  },
  methods: {
    async getPokemons() {
      try {
        const url = "https://pokeapi.co/api/v2";
        const pokemon = await fetch(`${url}/pokemon/${this.pokemonId}`).then((r) => r.json());
        this.poke = pokemon;
        console.log( this.poke);
      } catch (error) {
        console.log({ error });
        this.$router.push("/");
        console.log("no hay nada");
      }
    },
  },
  watch: {
    pokemonId() {
      console.log(this.pokemonId);
      this.getPokemons();
    },
  },
};
</script>
<style lang="">
</style>