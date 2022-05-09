<template >
  <div>
    <h1>About page</h1>
    <hr />
    <h2>{{ name }}</h2>
    <button @click="onchangename()">Change name</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "adrian",
    };
  },
  methods: {
    onchangename() {
      console.log("se cambiara el nombre a jose");
      this.name = "jose";
      console.log(this.name);
    },
  },
  beforeCreate() {
    // no hacer peticiones http
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    // se puede hacer peticiones http
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>
<style >
</style>