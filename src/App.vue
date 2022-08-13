<template>
  <div class="main-photos">
    <v-top-menu :routes="routes" />
    <router-view />
  </div>
</template>

<script>
import { routes } from "./routes.js";
import TopMenu from "./components/shared/TopMenu/TopMenu.vue";

export default {
  name: "AluraPic",
  components: {
    "v-top-menu": TopMenu,
  },
  data() {
    return {
      routes: routes.filter(route => route.menu),
    };
  },
};
</script>

<style>
.main-photos {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}
</style>
