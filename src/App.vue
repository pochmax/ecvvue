<template>
  <MenuCv msg="test" />
  <HomeVue msg="mon Ecv en Vue" />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HomeVue from "./components/HomeVue.vue";
import MenuCv from "./components/MenuCv.vue";

export default {
  name: "App",
  components: {
    MenuCv,
    HomeVue,
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
