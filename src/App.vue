<template>
  <div id="app">
    <header-menu></header-menu>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue';

export default {
  name: 'App',

  components: {
    HeaderMenu,
  }
};
</script>