<template>
  <nav class="menu">
    <ul>
      <li v-for="(route, key) in routes" :key="key">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TopMenu",
  props: {
    routes: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.menu ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.menu ul li {
  list-style: none;
  margin-right: 10%;
}

.menu ul li a {
  text-decoration: none;
  color: #000;
}
</style>